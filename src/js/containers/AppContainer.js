import {connect} from 'react-redux';
import {decidePokemon, decideType, decidePartner, showData} from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
  typeArray: state.typeArray,
  id: state.id,
  partnerNo: state.partnerNo
});


const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number)),
      decideType: () => dispatch(decideType()),
      decidePartner: () => dispatch(decidePartner()),
      showData: id => dispatch(showData(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
