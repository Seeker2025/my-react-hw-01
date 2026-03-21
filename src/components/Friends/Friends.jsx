import PropTypes from 'prop-types';

import { 
    FriendList,
    FriendListItem,
    Status,
    Image,
    Name 
    } from './Friends.styled'
 
export const Friends =({friends})=>{
    return(
        <FriendList>
           {
            friends.map(({id, avatar, name, isOnline})=>(
                <FriendListItem key={id}>

                    <Status status={isOnline}/>
                    <Image src={avatar} alt={"User avatar"} width={"48"}/>
                    <Name>{name}</Name>

                </FriendListItem>
           )
                )
                
           }
        
        </FriendList>

    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}