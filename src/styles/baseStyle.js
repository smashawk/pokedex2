import styled from 'styled-components';


// ContentArea
export const BaseContentArea = styled.section`
  margin-top: 50px;
`;


// InputArea
export const BaseInputAreaDesc = styled.p`
  margin: 0;
`;

export const BaseInputAreaText = styled.input`
  width: 200px;
`;

export const BaseInputAreaErrorText = styled.p`
  color: #f00;
  font-size: 1.4rem;
`;


// OutputArea
export const BaseOutputAreaWrap = styled.div`
  width: 550px;
`;

export const BaseOutputAreaList = styled.dl`
  display: inline-block;
  width: 330px;
  margin-bottom: 0;
  vertical-align: middle;
`;

export const BaseOutputAreaTitle = styled.dt`
  display: inline-block;
  width: 150px;
`;

export const BaseOutputAreaDesc = styled.dd`
  display: inline-block;
  width: 150px;
`;

export const BaseOutputAreaType = styled.span`
  margin-left: 10px;
`;

export const BaseOutputAreaImg = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  vertical-align: middle;
`;