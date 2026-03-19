import styled from '@emotion/styled';

export const FriendList = styled.ul`
    width: 211px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2px;
    
`;

export const FriendListItem = styled.li`
    background-color: #ffffff;
    width: 350px;
    height: 50px;
    padding: 3px;
    margin: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const Image = styled.img`
    background-color: #d9ff00;
    margin: 0 10px 0 5px;
    
       
`;

export const Name = styled.p`
    color: gray;
    font-size: 1.3em;
    font-weight: 500;
    
       
`;

const setBigColor = props =>{
     switch(props.status){
            case true:
                return 'green';
            case false:
                return 'red';
            default: 
                return '#000';           
        }

}

export const Status = styled.span`
    background-color: ${setBigColor};
    width: 15px;
    height: 15px;
    display: block;
    margin: 0 5px;
    border-radius: 50%;
`;