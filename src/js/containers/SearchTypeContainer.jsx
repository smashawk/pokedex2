import { connect } from 'react-redux';
import { decideType1, decideType2, resetType } from '../actions/decideType';
import { showData } from '../actions/showData';
import { showShinyPokemon } from '../actions/showShinyPokemon';
import SearchTypeComponent from '../components/pages/SearchTypeComponent';


const mapStateToProps = state => ({
  pokeType1: state.type.pokeType1,
  pokeType2: state.type.pokeType2,
  clickMessage: state.type.clickMessage,
  id: state.data.id,
  shinyId: state.shiny.shinyId,
});


const mapDispatchToProps = dispatch => ({
  decideType1: value => dispatch(decideType1(value)),
  decideType2: value => dispatch(decideType2(value)),
  resetType: () => dispatch(resetType()),
  showData: id => dispatch(showData(id)),
  showShinyPokemon: shinyId => dispatch(showShinyPokemon(shinyId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
