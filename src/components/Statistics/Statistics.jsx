import { StatisticCard , Title} from './Statistics.styled'

import { List } from 'components/StatList/StatList';
export const Statistics =({title, stats})=>{

    return(
        
                <StatisticCard>

                        {title && <Title>{title}</Title>}
                        <List stats={stats}/>
                    
                </StatisticCard>
    )
};