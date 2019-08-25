import { connect } from 'react-redux';
import { decideType } from '../actions/decideType';
import { showData } from '../actions/showData';
import { showShinyPokemon } from '../actions/showShinyPokemon';
import { resetType } from '../actions/resetType';
import SearchTypeComponent from '../components/pages/SearchTypeComponent';

const mapStateToProps = state => ({
  typeArray: state.type.typeArray,
  clickMessage: state.type.clickMessage,
  id: state.data.id,
  shinyId: state.shiny.shinyId,
});


const mapDispatchToProps = dispatch => ({
  decideType: () => dispatch(decideType()),
  showData: id => dispatch(showData(id)),
  showShinyPokemon: shinyId => dispatch(showShinyPokemon(shinyId)),
  resetType: () => dispatch(resetType()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTypeComponent);
