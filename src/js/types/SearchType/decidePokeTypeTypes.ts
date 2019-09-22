export const DECIDE_POKE_TYPE = 'DECIDE_POKE_TYPE'
export const RESET_POKE_TYPE_LIST = 'RESET_POKE_TYPE_LIST';


interface decidePokeType1Action {
  type: typeof DECIDE_POKE_TYPE
  payload:{
    pokeType1:string
    clickMessage:boolean
  }
}

interface decidePokeType2Action {
  type: typeof DECIDE_POKE_TYPE
  payload:{
    pokeType2:string
    clickMessage:boolean
  }
}

interface ResetPokeTypeAction {
  type: typeof RESET_POKE_TYPE_LIST
  payload:{
    clickMessage:boolean
  }
}

export type decidePokeTypeActionTypes = decidePokeType1Action | decidePokeType2Action | ResetPokeTypeAction;