import { connect } from 'react-redux';
import { decideType } from '../actions/decideType';
import { showData } from '../actions/showData';
import { resetType } from '../actions/resetType';
import SearchTypeComponent from '../components/pages/SearchTypeComponent';

const mapStateToProps = state => ({
  typeArray: state.type.typeArray,
  clickMessage: state.type.clickMessage,
  id: state.data.id,
});


const mapDispatchToProps = dispatch => ({
  decideType: () => dispatch(decideType()),
  showData: id => dispatch(showData(id)),
  resetType: () => dispatch(resetType()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
