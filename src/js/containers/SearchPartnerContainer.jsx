import { connect } from 'react-redux';
import { decidePartner } from '../actions/decidePartner';
import SearchPartnerComponent from '../components/pages/SearchPartnerComponent';

const mapStateToProps = state => ({
  partnerNo: state.partner.partnerNo
});


const mapDispatchToProps = dispatch => ({
      decidePartner: () => dispatch(decidePartner()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPartnerComponent);
