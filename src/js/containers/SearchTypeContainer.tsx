import { connect } from 'react-redux';
import { decidePokeType1, decidePokeType2, resetType } from '../actions/SearchType/decidePokeType';
import { showData } from '../actions/SearchType/showData';
import { showShinyPoke } from '../actions/SearchType/showShinyPoke';
import SearchTypeComponent from '../components/pages/SearchType';
import { AppState } from '../reducers/index'
import { Dispatch } from 'redux';
import { decidePokeTypeActionTypes } from '../types/SearchType/decidePokeTypeTypes'
import { ShowDataActionTypes } from '../types/SearchType/showDataTypes'
import { ShowShinyPokeActionTypes } from '../types/SearchType/showShinyPokeTypes'


const mapStateToProps = (state:AppState) => ({
  pokeType1: state.type.pokeType1,
  pokeType2: state.type.pokeType2,
  clickMessage: state.type.clickMessage,
  id: state.data.id,
  shinyId: state.shiny.shinyId,
});


const mapDispatchToProps = (dispatch:Dispatch<decidePokeTypeActionTypes | ShowDataActionTypes | ShowShinyPokeActionTypes>) => ({
  decidePokeType1: (value:string) => dispatch(decidePokeType1(value)),
  decidePokeType2: (value:string) => dispatch(decidePokeType2(value)),
  resetType: () => dispatch(resetType()),
  showData: (id:number) => dispatch(showData(id)),
  showShinyPoke: (shinyId:number) => dispatch(showShinyPoke(shinyId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
