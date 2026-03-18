import styled from '@emotion/styled';

export const Table = styled.table`
    
    width: 750px;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
`;

export const Thead = styled.thead`
    color: #ffffff;
    background-color: #0381b7;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    height: 47px;
`;


export const Line = styled.tr`
    color: #000000;
    font-size: 1.1em;
    font-weight: 400;
    background-color: ${props=>(props.numeric % 2 === 0 ? 'silver' : 'white')};

    & td:first-child{
        text-transform: lowercase;
    }
`;