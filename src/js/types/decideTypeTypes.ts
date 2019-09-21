export const DECIDE_TYPE = 'DECIDE_TYPE'
export const RESET_TYPE_LIST = 'RESET_TYPE_LIST';


interface DecideType1Action {
  type: typeof DECIDE_TYPE
  payload:{
    pokeType1:string
    clickMessage:boolean
  }
}

interface DecideType2Action {
  type: typeof DECIDE_TYPE
  payload:{
    pokeType2:string
    clickMessage:boolean
  }
}

interface ResetTypeAction {
  type: typeof RESET_TYPE_LIST
  payload:{
    clickMessage:boolean
  }
}

export type DecideTypeActionTypes = DecideType1Action | DecideType2Action | ResetTypeAction;