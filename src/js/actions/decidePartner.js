import decidePartnerNo from '../common/decidePartnerNo'


export const DECIDE_PARTNER_POKEMON = 'DECIDE_PARTNER_POKEMON';

export const decidePartner = () => {

  const partnerNo = decidePartnerNo();

  return(
    {
      type: DECIDE_PARTNER_POKEMON,
      partnerNo
    }
  )
};