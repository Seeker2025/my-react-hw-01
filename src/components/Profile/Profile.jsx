import { ProfileCard, Description, Image, Name, Location } from "./Profile.styled";


export const Profile =({man, username, location})=>{
    return (
        <>
            <ProfileCard>
  <Description>
    <Image
      src= {man}
      alt= {username}
     
    />
    <Name>{username}</Name>
    <p class="tag">@pmarica</p>
    <Location>{location}</Location>
  </Description>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</ProfileCard>

        
        </>
    )
}