import { useState, useEffect } from 'react';

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

  const [spendingEdit, setSpendingEdit] = useState({});

  useEffect(() => {
    if (Object.keys(spendingEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [spendingEdit]);

  const handleNewSpending = () => {
    setModal(true);
    setSpendingEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveSpendings = spending => {
    if (spending.id) {
      // Atualizar
      const updatedSpendings = spendings.map(s =>
        s.id === spending.id ? spending : s
      );
      setSpendings(updatedSpendings);
    } else {
      // Nova Despesa
      spending.id = idGenerator();
      spending.date = Date.now();
      setSpendings([...spendings, spending]);
    }
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
            <SpendingList
              spendings={spendings}
              setSpendingEdit={setSpendingEdit}
            />
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
          spendingEdit={spendingEdit}
        />
      )}
    </div>
  );
};

export default App;
