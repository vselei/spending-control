import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget }) => {
  const [message, setMessage] = useState('');

  const handleBudget = e => {
    e.preventDefault();

    if (!Number(budget) || Number(budget) < 0) {
      setMessage('Não é um orçamento válido');
    } else {
      setMessage('É um orçamento válido');
    }
  };

  return (
    <div className="budget-container container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label>Definir Orçamento</label>
          <input
            className="new-budget"
            type="text"
            placeholder="Adicione seu orçamento"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Adicionar" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
