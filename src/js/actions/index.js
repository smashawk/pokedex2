import createTypeArray from '../common/createTypeArray'
import decidePartnerNo from '../common/decidePartnerNo'

export const decidePokemon = (number) => ({
  type: (number < 803 && 0 < number) || number == null ? 'TRUE': 'FALSE',
  number,
  errorText: ''
})

export const decideType = () => {

  const typeArray = createTypeArray();

  return(
    {
      type: 'TYPE',
      typeArray
    }
  )
}

export const showData = (id) => {

  return(
    {
      type: 'DATA',
      id
    }
  )
}

export const decidePartner = () => {

  const partnerNo = decidePartnerNo();

  return(
    {
      type: 'PARTNER',
      partnerNo
    }
  )
}
