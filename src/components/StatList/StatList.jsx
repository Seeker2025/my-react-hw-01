import PropTypes from 'prop-types';
// import { Label,  } from 'components/Profile/Profile.styled'
import { Item, Raw, Label, Numeric } from './StatList.styled'

export const List =({stats})=>{
    return (
        <Raw>
            {
                stats.map(({id, label, percentage}, inx)=>(
                      <Item key={id}>

                            <Label>{label}</Label>
                            
                            <Numeric>{percentage}</Numeric>
                      
                      </Item>
                ))
            }
        </Raw>
    )

    
}

List.propTypes={
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
})
    )
}