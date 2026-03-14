import React from 'react';

import { Profile } from "../Profile/Profile";
import user from "../../common/user.json";
import man from "../../img/man.png";
console.log(user);






export const App = () => {
  return(
    <>
         
                        <Profile
                        username={user.username}
                        man={man}
                        location={user.location}
                        
                        />

    </>
  );
 
};
