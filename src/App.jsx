import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [budgetIsValid, setBudgetIsValid] = useState(false);

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
    </>
  );
};

export default App;
