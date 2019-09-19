const nijiDataReducer = (
  state = {
    result: ''
  },
  action
) => {

  switch (action.type) {

    case 'FETCH_SUCCEEDED':
      return {
        ...state,
        result: action.result
      };

    default:
      return state;

  }

};

export default nijiDataReducer;