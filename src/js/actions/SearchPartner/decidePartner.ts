import decidePartnerNo from '../../common/decidePartnerNo';
import { userInfo } from '../../types/commonTypes'

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';


export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchSucceeded = (result:userInfo) => {

  const partnerNo = decidePartnerNo();
  const inputName:HTMLInputElement = document.getElementById('inputName') as HTMLInputElement;
  const inputNameValue = inputName.value;

  return({
    type: "FETCH_SUCCEEDED",
    result,
    partnerNo,
    inputNameValue,
  })
};

export const fetchFailed = (result:userInfo) => ({
  type: "FETCH_FAILED",
  result
});
