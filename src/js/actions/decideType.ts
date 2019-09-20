import createTypeArray from '../common/createTypeArray';


export const DECIDE_TYPE = 'DECIDE_TYPE'

export const decideType = () => {

  const typeArray = createTypeArray();

  return(
    {
      type: DECIDE_TYPE,
      typeArray
    }
  )
};