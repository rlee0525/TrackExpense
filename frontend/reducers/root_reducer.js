import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ExpensesReducer from './expenses_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  expenses: ExpensesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
