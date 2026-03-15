import { 
                                    ProfileCard,
                                    Description,
                                    Image,
                                    Name,
                                    Location,
                                    Quantity,
                                    Stats,
                                    Tag,
                                    Label,
 
        } from './Profile.styled';


export const Profile =({username, tag, location, avatar, stats})=>{
    return (
        
          <ProfileCard>

                <Description>
                      <Image src= {avatar} alt= {username} />
                      <Name>{username}</Name>
                      <Tag>@{tag}</Tag>
                      <Location>{location}</Location>
                </Description>

                <Stats>
                  <li>
                    <Label>Folowers</Label>
                    <Quantity>{stats.followers}</Quantity>
                  </li>
                  <li>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                  </li>
                  <li>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                  </li>
                </Stats>

          </ProfileCard>

       
    )
};