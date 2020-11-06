import { connect } from "react-redux";
import { fetchData } from "@js/actions/SearchPartner/decidePartner";
import { login } from "@js/actions/SearchPartner/login";
import { AppState } from "@js/reducers/index";
import { Dispatch } from "redux";
import { DecidePartnerActionTypes } from "@js/types/SearchPartner/decidePartnerTypes";
import { LoginActionTypes } from "@js/types/SearchPartner/loginTypes";
import SearchPartnerComponent from "../../components/pages/SearchPartner";

const mapStateToProps = (state: AppState) => ({
	inputName: state.partner.inputName,
	nijiData: state.partner.nijiData,
	partnerNo: state.partner.partnerNo,
	isDecision: state.partner.isDecision,
	isLogin: state.login.isLogin
});

const mapDispatchToProps = (
	dispatch: Dispatch<DecidePartnerActionTypes | LoginActionTypes>
) => ({
	decidePartner: (inputName: string) => dispatch(fetchData(inputName)),
	login: () => dispatch(login())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchPartnerComponent);
