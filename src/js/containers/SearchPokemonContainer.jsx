import { connect } from 'react-redux';
import { decidePokemon } from '../actions/decidePokemon';
import SearchPokemonComponent from '../components/pages/SearchPokemonComponent';

const mapStateToProps = state => ({
  no: state.number.no,
  errorMessage: state.number.errorMessage,
});


const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPokemonComponent);
