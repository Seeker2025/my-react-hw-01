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