import { DecideTypeActionTypes, DECIDE_TYPE, RESET_TYPE_LIST } from '../types/decideTypeTypes'
import resetSelectOption from '../common/resetSelectOption';


export const decideType1 = (value:string):DecideTypeActionTypes => {

  return {
    type: DECIDE_TYPE,
    payload: {
      pokeType1: value,
      clickMessage: true
    }
  }

};

export const decideType2 = (value:string):DecideTypeActionTypes => {

  return {
    type: DECIDE_TYPE,
    payload: {
      pokeType2: value,
      clickMessage: true
    }
  }

};

export const resetType = ():DecideTypeActionTypes => {

  resetSelectOption();

  return {
    type: RESET_TYPE_LIST,
    payload: {
      clickMessage: false
    }
  }

};