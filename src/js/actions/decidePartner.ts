import decidePartnerNo from '../common/decidePartnerNo'

export const fetchData = () => ({
  type: "FETCH_DATA",
});

interface userInfo {
  user_id: string,
  user_name: string,
  nickname: string,
  mail: string,
  department_id: string,
  department_name: string,
  department_division_name: string
  photo_url: string
}

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
