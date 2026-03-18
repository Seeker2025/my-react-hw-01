import React from 'react';

import { Profile    }   from '../Profile/Profile';
import { Statistics }   from '../Statistics/Statistics';
import { Friends    }   from '../Friends/Friends'
import { TransactionHistory } from 'components/TransactionsHis/TransactionsHis';
import user          from '../../common/user.json';
import stats         from '../../common/data.json';
import friends       from '../../common/friends.json';
import transactions  from '../../common/transactions.json';
import man           from '../../img/man.png';
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
                        title={"Upload stats"}
                        stats={stats}
                  
                  />

                  <Friends friends={friends}/>

                  <TransactionHistory transactions={transactions}/>
                    
    </>
  );
 
};
