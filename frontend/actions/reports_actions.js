import * as APIUtil from '../util/reports_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';
export const RECEIVE_REPORT = 'RECEIVE_REPORT';
export const REMOVE_REPORT = 'REMOVE_REPORT';

export const receiveReports = reports => ({
  type: RECEIVE_REPORTS,
  reports
});

export const receiveReport = report => ({
  type: RECEIVE_REPORT,
  report
});

export const removeReport = report => ({
  type: REMOVE_REPORT,
  report
});

export const requestReports = () => dispatch => (
  APIUtil.fetchReports()
    .then(reports => dispatch(receiveReports(reports)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestReport = id => dispatch => (
  APIUtil.fetchReport(id)
    .then(report => dispatch(receiveReport(report)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const createReport = data => dispatch => (
  APIUtil.createReport(data)
    .then(report => dispatch(receiveReport(report)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateReport = data => dispatch => (
  APIUtil.updateReport(data)
    .then(report => dispatch(receiveReport(report)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const destroyReport = id => dispatch => (
  APIUtil.destroyReport(id)
    .then(report => dispatch(removeReport(report)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
