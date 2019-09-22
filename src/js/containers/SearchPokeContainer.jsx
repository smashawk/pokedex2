import { connect } from 'react-redux';
import { decidePoke } from '../actions/SearchPoke/decidePoke';
import SearchPokeComponent from '../components/pages/SearchPoke';

const mapStateToProps = state => ({
  no: state.number.no,
  errorMessage: state.number.errorMessage,
});


const mapDispatchToProps = dispatch => ({
  decidePoke: text => dispatch(decidePoke(text)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPokeComponent);
