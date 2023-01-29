import Spending from './Spending';

const SpendingList = ({
  spendings,
  setSpendingEdit,
  deleteSpending,
  filter,
  filterSpendings
}) => (
  <div className="spending-list container">
    {filter ? (
      <>
        <h2>
          {filterSpendings && filterSpendings.length
            ? 'Despesas'
            : 'Não há despesas nessa categoria'}
        </h2>
        {filterSpendings.map(spending => (
          <Spending
            key={spending.id}
            spending={spending}
            setSpendingEdit={setSpendingEdit}
            deleteSpending={deleteSpending}
          />
        ))}
      </>
    ) : (
      <>
        <h2>
          {spendings && spendings.length ? 'Despesas' : 'Não há despesas'}
        </h2>
        {spendings.map(spending => (
          <Spending
            key={spending.id}
            spending={spending}
            setSpendingEdit={setSpendingEdit}
            deleteSpending={deleteSpending}
          />
        ))}
      </>
    )}
  </div>
);

export default SpendingList;
