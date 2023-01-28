import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setBudgetIsValid }) => {
  const [message, setMessage] = useState('');

  const handleBudget = e => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage('Não é um orçamento válido');
      return;
    }

    setMessage('');
    setBudgetIsValid(true);
  };

  return (
    <div className="budget-container container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label>Definir Orçamento</label>
          <input
            className="new-budget"
            type="number"
            placeholder="Adicione seu orçamento"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Adicionar" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
