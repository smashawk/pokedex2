import { connect } from 'react-redux';
import { decidePartner } from '../actions/decidePartner';
import { login } from '../actions/login';
import SearchPartnerComponent from '../components/pages/SearchPartnerComponent';

const mapStateToProps = state => ({
  partnerNo: state.partner.partnerNo,
  inputName: state.partner.inputName,
  isDecision: state.partner.isDecision,
  isLogin: state.login.isLogin,
});


const mapDispatchToProps = dispatch => ({
  decidePartner: () => dispatch(decidePartner()),
  login: () => dispatch(login()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPartnerComponent);
