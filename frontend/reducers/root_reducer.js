import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AdminsReducer from './admins_reducer';
import ExpensesReducer from './expenses_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: AdminsReducer,
  expenses: ExpensesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
