import { connect } from 'react-redux';
import { fetchData } from '../actions/SearchPartner/decidePartner';
import { login } from '../actions/SearchPartner/login';
import SearchPartnerComponent from '../components/pages/SearchPartner';
import { AppState } from '../reducers/index'
import { Dispatch } from 'redux';
import { DecidePartnerActionTypes } from '../types/SearchPartner/decidePartnerTypes'
import { LoginActionTypes } from '../types/SearchPartner/loginTypes'


const mapStateToProps = (state:AppState) => ({
  inputName: state.partner.inputName,
  nijiData: state.partner.nijiData,
  partnerNo: state.partner.partnerNo,
  isDecision: state.partner.isDecision,
  isLogin: state.login.isLogin,
});


const mapDispatchToProps = (dispatch:Dispatch<DecidePartnerActionTypes | LoginActionTypes>) => ({
  decidePartner: (inputName:string) => dispatch(fetchData(inputName)),
  login: () => dispatch(login()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPartnerComponent);
