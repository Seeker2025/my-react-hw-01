import styled from '@emotion/styled';
import { getColor } from '../../common/color';

export const Raw = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 360px;
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
    return `#${getColor()}`;
  }};
`;

export const Numeric = styled.span`
   
`;

export const Label = styled.span`
   
    
`;