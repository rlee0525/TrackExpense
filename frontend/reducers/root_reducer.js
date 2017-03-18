import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ExpensesReducer from './expenses_reducer';
import ReportsReducer from './reports_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  expenses: ExpensesReducer,
  reports: ReportsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
