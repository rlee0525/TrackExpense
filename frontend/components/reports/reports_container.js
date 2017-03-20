import Reports from './reports';
import { connect } from 'react-redux';
import { requestReports,
         requestReport,
         createReport,
         updateReport,
         destroyReport } from '../../actions/reports_actions';
import { receiveErrors, clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  reports: state.reports
});

const mapDispatchToProps = dispatch => ({
  requestReports: () => dispatch(requestReports()),
  requestReport: id => dispatch(requestReport(id)),
  createReport: report => dispatch(createReport(report)),
  updateReport: report => dispatch(updateReport(report)),
  destroyReport: id => dispatch(destroyReport(id)),
  receiveErrors: () => dispatch(receiveErrors()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
