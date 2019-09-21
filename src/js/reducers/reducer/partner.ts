import { FETCH_SUCCEEDED } from '../../actions/decidePartner'


type actionData = {
  type: string,
  result:any,
  partnerNo: number,
  inputNameValue: string,
  isDecision: boolean
}

const nijiDataReducer = (
  state = {
    result: '',
    partnerNo: 0,
    inputNameValue: '',
    isDecision: false,
  },
  action:actionData
) => {

  switch (action.type) {

    case FETCH_SUCCEEDED:
      return {
        ...state,
        result: action.result,
        partnerNo: action.partnerNo,
        inputNameValue: action.inputNameValue,
        isDecision: true,
      };

    default:
      return state;

  }

};

export default nijiDataReducer;