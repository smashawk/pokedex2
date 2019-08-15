import { connect } from 'react-redux';
import { decidePokemon } from '../actions/decidePokemon';
import SearchPokemonComponent from '../components/pages/SearchPokemonComponent';

const mapStateToProps = state => ({
  no: state.number.no,
  errorMessage: state.number.errorMessage,
});


const mapDispatchToProps = dispatch => ({
  decidePokemon: text => dispatch(decidePokemon(text)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPokemonComponent);
