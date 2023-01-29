import Spending from './Spending';

const SpendingList = ({ spendings, setSpendingEdit }) => (
  <div className="spending-list container">
    <h2>{spendings && spendings.length ? 'Despesas' : 'Não há despesas'}</h2>
    {spendings.map(spending => (
      <Spending
        key={spending.id}
        spending={spending}
        setSpendingEdit={setSpendingEdit}
      />
    ))}
  </div>
);

export default SpendingList;
