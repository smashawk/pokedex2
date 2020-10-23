import { connect } from 'react-redux';
import { decidePoke } from '@js/actions/SearchPoke/decidePoke';
import SearchPokeComponent from '@js/components/pages/SearchPoke';
import { AppState } from '@js/reducers/index'
import { Dispatch } from 'redux';
import { DecidePokeActionTypes } from '@js/types/SearchPoke/decidePokeTypes'


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
