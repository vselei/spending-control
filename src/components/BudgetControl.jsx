const BudgetControl = ({ budget }) => {
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
          {formatQty(0)}
        </p>
        <p>
          <span>Gasto: </span>
          {formatQty(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
