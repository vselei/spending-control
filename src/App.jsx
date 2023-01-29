import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import NewSpending from './img/new-spending.svg';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [budgetIsValid, setBudgetIsValid] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewSpending = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
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
      {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal} />}
    </>
  );
};

export default App;
