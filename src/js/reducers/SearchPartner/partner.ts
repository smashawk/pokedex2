import { DecidePartnerActionTypes, FETCH_SUCCEEDED, FETCH_FAILED} from '../../types/SearchPartner/decidePartnerTypes'
import decidePartnerNo from '../../common/decidePartnerNo';

type initialStateTypes = {
  inputName: string,
  nijiData:any,
  partnerNo: number,
  isDecision: boolean
}

const nijiDataReducer = (
  state:initialStateTypes = {
    inputName: '',
    nijiData: '',
    partnerNo: 0,
    isDecision: false,
  },
  action:DecidePartnerActionTypes
) => {

  switch (action.type) {

    case FETCH_SUCCEEDED:

      // 相棒ポケモンを決定する
      const partnerNo = decidePartnerNo(action.payload.inputName);

      return {
        ...state,
        ...action.payload,
        partnerNo,
        isDecision: true,
      };

    case FETCH_FAILED:
      return {
        ...state,
      };

    default:
      return state;

  }

};

export default nijiDataReducer;