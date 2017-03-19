import * as APIUtil from '../util/admins_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const requestUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
