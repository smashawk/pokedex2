import decidePartnerNo from '../common/decidePartnerNo'
import axios from 'axios';


export const DECIDE_PARTNER_POKEMON = 'DECIDE_PARTNER_POKEMON';

export const decidePartner = () => {

  const partnerNo = decidePartnerNo();
  const inputName = document.getElementById('inputName').value;

  const httpClient = axios.create({
    baseURL:'https://kadou.i.nijibox.net/api',
    withCredentials:true,
  });
  httpClient.get('/who/search?query=' + inputName)
  .then((result)=>{
    // console.log('result', result.data.data.item_list[0])
  })

  return(
    {
      type: DECIDE_PARTNER_POKEMON,
      partnerNo,
      inputName,
    }
  )
};