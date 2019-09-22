import { connect } from 'react-redux';
import { decidePokeType1, decidePokeType2, resetType } from '../actions/SearchType/decidePokeType';
import { showData } from '../actions/SearchType/showData';
import { showShinyPoke } from '../actions/SearchType/showShinyPoke';
import SearchTypeComponent from '../components/pages/SearchType';


const mapStateToProps = state => ({
  pokeType1: state.type.pokeType1,
  pokeType2: state.type.pokeType2,
  clickMessage: state.type.clickMessage,
  id: state.data.id,
  shinyId: state.shiny.shinyId,
});


const mapDispatchToProps = dispatch => ({
  decidePokeType1: value => dispatch(decidePokeType1(value)),
  decidePokeType2: value => dispatch(decidePokeType2(value)),
  resetType: () => dispatch(resetType()),
  showData: id => dispatch(showData(id)),
  showShinyPoke: shinyId => dispatch(showShinyPoke(shinyId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
