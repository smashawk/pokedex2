const nijiDataReducer = (
  state = {
    result: '',
    partnerNo: 0,
    inputNameValue: '',
    isDecision: false,
  },
  action
) => {

  switch (action.type) {

    case 'FETCH_SUCCEEDED':
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