import Reports from './reports';
import { connect } from 'react-redux';
import { requestExpenses } from '../../actions/expenses_actions';
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
)(Reports);
