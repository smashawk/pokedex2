import resetTypeArray from '../common/resetTypeArray';
import createTypeArray from '../common/createTypeArray';

export const RESET_TYPE_LIST = 'RESET_TYPE_LIST';


export const resetType = () => {

resetTypeArray();
const typeArray = createTypeArray();
  
  return {
    type: RESET_TYPE_LIST,
    typeArray
  }
};