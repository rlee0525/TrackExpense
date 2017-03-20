import React from 'react';
import { values } from 'lodash';
import UserExpenseDetail from './user_expense_detail';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    let expenses = values(user.expenses).sort((a, b) => {
      return Date.parse(a.datetime) - Date.parse(b.datetime);
    });

    return (
      <div className="users-list">
        <div className="user-username">{user.username}</div>

        {expenses.map(expense => (
          <div key={Math.random()}
               className="user-expense-list-item">
            <li key={Math.random()} className="user-expenses-li">
              <UserExpenseDetail expense={ expense } />
            </li>
          </div>
        ))}
      </div>
    )
  }
}

export default UserDetail;
