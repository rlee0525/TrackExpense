import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import UsersContainer from './users/users_container';
import ExpensesContainer from './expenses/expenses_container';
import ReportsContainer from './reports/reports_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/expenses')
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={_ensureLoggedOut} />
        <Route path="/users" component={ UsersContainer } onEnter={_ensureLoggedIn} />
        <Route path="/expenses" component={ ExpensesContainer } onEnter={_ensureLoggedIn} />
        <Route path="/reports" component={ ReportsContainer } onEnter={_ensureLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
