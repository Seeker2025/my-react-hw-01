import { StatisticCard , Title} from './Statistics.styled'

import { List } from 'components/StatList/StatList';
export const Statistics =({title, stats})=>{

    return(
                <StatisticCard>

                        <Title>{title || "Upload stats"}</Title>

                        <List stats={stats}/>
                    
                </StatisticCard>
    )
};