import { connect } from 'react-redux';
import { fetchData } from '../actions/SearchPartner/decidePartner';
import { login } from '../actions/SearchPartner/login';
import SearchPartnerComponent from '../components/pages/SearchPartner';

const mapStateToProps = state => ({
  partnerNo: state.partner.partnerNo,
  inputNameValue: state.partner.inputNameValue,
  isDecision: state.partner.isDecision,
  isLogin: state.login.isLogin,
  result: state.partner.result,
});


const mapDispatchToProps = dispatch => ({
  decidePartner: (e) => dispatch(fetchData(e)),
  login: () => dispatch(login()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPartnerComponent);
