import { connect } from 'react-redux';
import { fetchData } from '../actions/decidePartner';
import { login } from '../actions/login';
import SearchPartnerComponent from '../components/pages/SearchPartnerComponent';

const mapStateToProps = state => ({
  partnerNo: state.partner.partnerNo,
  inputName: state.partner.inputName,
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
