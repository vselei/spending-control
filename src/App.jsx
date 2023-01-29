import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import NewSpending from './img/new-spending.svg';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [budgetIsValid, setBudgetIsValid] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNewSpending = () => {
    setModal(true);
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      {budgetIsValid && (
        <div className="new-spending">
          <img
            src={NewSpending}
            alt="Ícone de adicionar gasto"
            onClick={handleNewSpending}
          />
        </div>
      )}
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default App;
