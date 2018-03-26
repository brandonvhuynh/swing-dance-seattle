import { connect } from "react-redux";

import { eventSubmitted } from "../redux/actions";
import { selectEventSubmissionSucceeded } from "../redux/reducer";
import AddEvent from "../components/add-event";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectEventSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onEventSubmit: (details) => dispatch(eventSubmitted(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);