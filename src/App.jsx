import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [budget, setBudget] = useState(0)

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
      />
    </>
  );
};

export default App;
