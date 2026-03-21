import PropTypes from 'prop-types';
import { Table, Thead, Line } from './TransactionsHis.styled';

export const TransactionHistory =({transactions})=>{
    return(
        <Table>
                <Thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </Thead>

                <tbody>
                {
                    transactions.map(({id, type, amount, currency}, idx)=>(
                <Line key={id} numeric={idx}>

      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>

                </Line>
                    ))
                }
                </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,

        })

    )
}