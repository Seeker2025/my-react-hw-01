import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    background-color: red;
    border-radius: 5px;
    width: 320px;
`;

export const Description = styled.div`
    background-color: #734747;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 8px dashed gold;
`;

export const Name = styled.p`
    color: #00ff00;
    font-size: 1.7em;
    font-weight: 400;
    margin: 10px;
`;

export const Location = styled.p`
    color: #ffe600;
    margin: 8px 0 19px;
`;

export const Tag = styled.p`
    padding: 0px;
    margin: 0;
`;

export const Stats = styled.ul`
    background-color: #8c1f1f;
    display: flex;
    padding: 15px;
    padding-left: 25px;
    flex-direction: raw;
    border-radius: 5px;

       & li{
            display: flex;
            padding: 15px;
            flex-direction: column;
            align-items: center;
            color: #e8e8e8;
        }
`;

export const Label = styled.span`
            font-size: 1em;
            color: aqua;
`;


export const Quantity = styled.span`
    background: #8c1f1f;
            font-size: 1.3em;
            font-weight: 500;
            color: #6cee6c;
`;





