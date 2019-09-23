import { connect } from 'react-redux';
import { decidePoke } from '../actions/SearchPoke/decidePoke';
import SearchPokeComponent from '../components/pages/SearchPoke';
import { AppState } from '../reducers/index'
import { Dispatch } from 'redux';
import { DecidePokeActionTypes } from '../types/SearchPoke/decidePokeTypes'


const mapStateToProps = (state:AppState) => ({
  no: state.number.no,
  errorMessage: state.number.errorMessage,
});


const mapDispatchToProps = (dispatch:Dispatch<DecidePokeActionTypes>) => ({
  decidePoke: (inputText:number|string) => dispatch(decidePoke(inputText)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPokeComponent);
