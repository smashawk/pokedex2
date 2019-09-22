import { connect } from 'react-redux';
import { fetchData } from '../actions/SearchPartner/decidePartner';
import { login } from '../actions/SearchPartner/login';
import SearchPartnerComponent from '../components/pages/SearchPartner';


const mapStateToProps = state => ({
  inputName: state.partner.inputName,
  nijiData: state.partner.nijiData,
  partnerNo: state.partner.partnerNo,
  isDecision: state.partner.isDecision,
  isLogin: state.login.isLogin,
});


const mapDispatchToProps = dispatch => ({
  decidePartner: (inputName) => dispatch(fetchData(inputName)),
  login: () => dispatch(login()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPartnerComponent);
