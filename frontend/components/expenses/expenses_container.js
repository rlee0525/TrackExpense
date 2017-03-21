import Expenses from './expenses';
import { connect } from 'react-redux';
import { requestExpenses,
         requestExpense,
         createExpense,
         updateExpense,
         destroyExpense } from '../../actions/expenses_actions';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  requestExpenses: () => dispatch(requestExpenses()),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
