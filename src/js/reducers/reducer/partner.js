const nijiDataReducer = (
  state = {
    result: '',
    partnerNo: 0,
    inputName: '',
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
        inputName: action.inputName,
        isDecision: true,
      };

    default:
      return state;

  }

};

export default nijiDataReducer;