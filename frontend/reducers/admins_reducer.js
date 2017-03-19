import { RECEIVE_USERS } from '../actions/admins_actions';

const AdminsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default AdminsReducer;
