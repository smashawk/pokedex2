import { connect } from 'react-redux';
import { decideType, showData } from '../actions/index';
import SearchTypeComponent from '../components/pages/SearchTypeComponent';

const mapStateToProps = state => ({
  typeArray: state.typeArray,
  id: state.id,
});


const mapDispatchToProps = dispatch => ({
      decideType: () => dispatch(decideType()),
      showData: id => dispatch(showData(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
