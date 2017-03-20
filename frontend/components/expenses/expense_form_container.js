import ExpenseForm from './expense_form';
import { connect } from 'react-redux';
import { requestExpense,
         createExpense,
         updateExpense,
         destroyExpense } from '../../actions/expenses_actions';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
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
)(ExpenseForm);
