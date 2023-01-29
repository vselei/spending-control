import { useState, useEffect } from 'react';

const BudgetControl = ({ spendings, budget }) => {
  const [available, setAvailable] = useState(0);
  const [spend, setSpend] = useState(0);

  useEffect(() => {
    const totalSpend = spendings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.qty,
      0
    );

    const totalAvailable = budget - totalSpend;

    setAvailable(totalAvailable);
    setSpend(totalSpend);
  }, [spendings]);

  const formatQty = qty =>
    qty.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <div className="budget-container container shadow two-columns">
      <div>
        <p>Gráfico</p>
      </div>
      <div className="budget-content">
        <p>
          <span>Orçamento: </span>
          {formatQty(budget)}
        </p>
        <p>
          <span>Disponível: </span>
          {formatQty(available)}
        </p>
        <p>
          <span>Gasto: </span>
          {formatQty(spend)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
