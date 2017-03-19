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
  requestExpense: id => dispatch(requestExpense(id)),
  createExpense: expense => dispatch(createExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
  destroyExpense: id => dispatch(destroyExpense(id)),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
