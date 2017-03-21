import ExpenseDetail from './expense_detail';
import { connect } from 'react-redux';
import { destroyExpense } from '../../actions/expenses_actions';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  destroyExpense: id => dispatch(destroyExpense(id)),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseDetail);
