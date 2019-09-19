import decidePartnerNo from '../common/decidePartnerNo'


export const DECIDE_PARTNER_POKEMON = 'DECIDE_PARTNER_POKEMON';

export const decidePartner = () => {

  const partnerNo = decidePartnerNo();
  const inputName = document.getElementById('inputName').value;
  return(
    {
      type: DECIDE_PARTNER_POKEMON,
      partnerNo,
      inputName,
    }
  )
};