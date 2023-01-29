import { useState, useEffect } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({
  spendings,
  setSpendings,
  budget,
  setBudget,
  setBudgetIsValid
}) => {
  const [percentage, setPercentage] = useState(0);

  const [available, setAvailable] = useState(0);
  const [spend, setSpend] = useState(0);

  useEffect(() => {
    const totalSpend = spendings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.qty,
      0
    );

    const totalAvailable = budget - totalSpend;

    // Calcular porcentagem de gastos
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 500);

    setAvailable(totalAvailable);
    setSpend(totalSpend);
  }, [spendings]);

  const formatQty = qty =>
    qty.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  const handleResetApp = () => {
    const result = confirm('Deseja reiniciar o orçamento e gastos?');

    if (result) {
      setBudget(0);
      setSpendings([]);
      setBudgetIsValid(false);
    }
  };

  return (
    <div className="budget-container container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
          })}
          value={percentage}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="budget-content">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reiniciar App
        </button>
        <p>
          <span>Orçamento: </span>
          {formatQty(budget)}
        </p>
        <p className={`${available < 0 ? 'neg' : ''}`}>
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
