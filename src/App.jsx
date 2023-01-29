import { useState, useEffect } from 'react';

import Header from './components/Header';
import Filter from './components/Filter';
import SpendingList from './components/SpendingList';
import Modal from './components/Modal';

import { idGenerator } from './helpers';

import NewSpending from './img/new-spending.svg';

const App = () => {
  const [spendings, setSpendings] = useState(
    JSON.parse(localStorage.getItem('spendings')) ?? []
  );

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [budgetIsValid, setBudgetIsValid] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spendingEdit, setSpendingEdit] = useState({});

  const [filter, setFilter] = useState('');
  const [filterSpendings, setFilterSpendings] = useState([]);

  useEffect(() => {
    if (Object.keys(spendingEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [spendingEdit]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('spendings', JSON.stringify(spendings) ?? []);
  }, [spendings]);

  useEffect(() => {
    if (filter) {
      // Filtrar gastos por categoria
      const filteredSpendings = spendings.filter(s => s.category === filter);
      setFilterSpendings(filteredSpendings);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLs = Number(localStorage.getItem('budget')) ?? 0;

    if (budgetLs > 0) {
      setBudgetIsValid(true);
    }
  }, []);

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
      setSpendingEdit({});
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

  const deleteSpending = id => {
    const updatedSpendings = spendings.filter(s => s.id !== id);
    setSpendings(updatedSpendings);
  };

  return (
    <div className={modal ? 'poster' : ''}>
      <Header
        spendings={spendings}
        setSpendings={setSpendings}
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      {budgetIsValid && (
        <>
          <Filter filter={filter} setFilter={setFilter} />
          <main>
            <SpendingList
              spendings={spendings}
              setSpendingEdit={setSpendingEdit}
              deleteSpending={deleteSpending}
              filter={filter}
              filterSpendings={filterSpendings}
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
          setSpendingEdit={setSpendingEdit}
          spendingEdit={spendingEdit}
        />
      )}
    </div>
  );
};

export default App;
