import { RECEIVE_REPORTS,
         RECEIVE_REPORT,
         REMOVE_REPORT } from '../actions/reports_actions';
import { merge } from 'lodash';

const RerportsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REPORTS:
      return action.reports;
    case RECEIVE_REPORT:
      return merge({}, state, {
        [action.report.id]: action.report
      });
    case REMOVE_REPORT:
      const nextState = merge({}, state);
      delete nextState[action.report.id];
      return nextState;
    default:
    return state;
  }
};

export default RerportsReducer;
