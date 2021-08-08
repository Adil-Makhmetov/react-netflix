import './transactions.scss';
import noAvatar from '../../assets/images/default-avatar.png'

export default ({ className }) => {
  const Button = ({type}) => (
    <button className={`transactions-table__button ${type}`}>
      {type}
    </button>
  );

  return (
    <div className={`${className} transactions`}>
      <h3 className="transactions__title">Latest transactions</h3>
      <table className="transactions-table">
        <thead>
          <tr className='transactions-table__headers'>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='transactions-table__row'>
            <td className="transactions-table__user">
              <img src={noAvatar} alt="avatar"
                   className="transactions-table__avatar"
              />
              <span className="transactions-table__name">Susan Carol</span>
            </td>
            <td className='transactions-table__date'>2 Jun 2021</td>
            <td className='transactions-table__amount'>$122.00</td>
            <td className='transactions-table__status'><Button type='Approved'/></td>
          </tr>
          <tr className='transactions-table__row'>
            <td className="transactions-table__user">
              <img src={noAvatar} alt="avatar"
                   className="transactions-table__avatar"
              />
              <span className="transactions-table__name">Susan Carol</span>
            </td>
            <td className='transactions-table__date'>1 Jul 2021</td>
            <td className='transactions-table__amount'>$161.00</td>
            <td className='transactions-table__status'><Button type='Decined'/></td>
          </tr>
          <tr className='transactions-table__row'>
            <td className="transactions-table__user">
              <img src={noAvatar} alt="avatar"
                   className="transactions-table__avatar"
              />
              <span className="transactions-table__name">Susan Carol</span>
            </td>
            <td className='transactions-table__date'>18 Jun 2021</td>
            <td className='transactions-table__amount'>$179.00</td>
            <td className='transactions-table__status'><Button type='Pending'/></td>
          </tr>
          <tr className='transactions-table__row'>
            <td className="transactions-table__user">
              <img src={noAvatar} alt="avatar"
                   className="transactions-table__avatar"
              />
              <span className="transactions-table__name">Susan Carol</span>
            </td>
            <td className='transactions-table__date'>7 Jun 2021</td>
            <td className='transactions-table__amount'>$71.00</td>
            <td className='transactions-table__status'><Button type='Approved'/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}