import decidePartnerNo from '../common/decidePartnerNo'

export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const fetchSucceeded = result => {

  const partnerNo = decidePartnerNo();
  const inputName = document.getElementById('inputName').value;

  return({
    type: "FETCH_SUCCEEDED",
    result,
    partnerNo,
    inputName,
  })
};

export const fetchFailed = result => ({
  type: "FETCH_FAILED",
  result
});
