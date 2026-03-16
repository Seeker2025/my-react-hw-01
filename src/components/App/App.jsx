import React from 'react';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import user from '../../common/user.json';
import stats from '../../common/data.json';
import man from '../../img/man.png';
console.log(user);


export const App = () => {
  return(
    <>
         
                        <Profile

                              username={user.username}
                              tag = {user.tag}
                              location={user.location}
                              avatar={man}
                              stats={user.stats}
                              
                        />
                        <Statistics
                              title={false}
                              stats={stats}
                        
                        />


    </>
  );
 
};
