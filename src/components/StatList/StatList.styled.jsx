import styled from '@emotion/styled';

export const Raw = styled.ul`
    padding: 0;
    background-color: #fe1d1d;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 320px;
`;


export const Item = styled.li`
    padding: 15px 0;
    color: #ffffff;
    height: 40px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 0x333333).toString(16).padStart(6, "0")}`;
  }};
`;

export const Numeric = styled.span`
   
`;

export const Label = styled.span`
   
    
`;