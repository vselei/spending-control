import { useState } from 'react';

import Header from './components/Header';
import SpendingList from './components/SpendingList';
import Modal from './components/Modal';

import { idGenerator } from './helpers';

import NewSpending from './img/new-spending.svg';

const App = () => {
  const [spendings, setSpendings] = useState([]);
  
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

  const saveSpendings = spending => {
    spending.id = idGenerator();
    spending.date = Date.now();
    setSpendings([...spendings, spending]);
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'poster' : ''}>
      <Header
        spendings={spendings}
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      {budgetIsValid && (
        <>
          <main>
            <SpendingList spendings={spendings} />
          </main>
          <div className="new-spending">
            <img
              src={NewSpending}
              alt="Ícone de adicionar gasto"
              onClick={handleNewSpending}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpendings={saveSpendings}
        />
      )}
    </div>
  );
};

export default App;
