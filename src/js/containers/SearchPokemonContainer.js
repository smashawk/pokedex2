import { connect } from 'react-redux';
import { decidePokemon } from '../actions/decidePokemon';
import SearchPokemonComponent from '../components/pages/SearchPokemonComponent';

const mapStateToProps = state => ({
  number: state.number,
  errorText: state.errorText,
});


const mapDispatchToProps = dispatch => ({
      decidePokemon: number => dispatch(decidePokemon(number)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPokemonComponent);
