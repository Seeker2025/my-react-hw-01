import { StatisticCard , StatList, Item, Label, Percentage, Title} from './Statistics.styled'

export const Statistics =()=>{

    return(
                <StatisticCard>
                <Title>Upload stats</Title>

                <StatList>
                    <Item>
                        <Label>.docx</Label>
                        <Percentage>4%</Percentage>
                    </Item>

                    <Item>
                        <Label>.mp3</Label>
                        <Percentage>14%</Percentage>
                    </Item>

                    <Item>
                        <Label>.pdf</Label>
                        <Percentage>41%</Percentage>
                    </Item>

                    <Item>
                        <Label>.mp4</Label>
                        <Percentage>12%</Percentage>
                    </Item>
                </StatList>
                </StatisticCard>
    )
};