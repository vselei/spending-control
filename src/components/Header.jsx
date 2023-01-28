import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, budgetIsValid, setBudgetIsValid }) => (
  <header>
    <h1>Planificador de Gastos</h1>
    {budgetIsValid ? (
      <p>É válido</p>
    ) : (
      <NewBudget
        budget={budget}
        setBudget={setBudget}
        setBudgetIsValid={setBudgetIsValid}
      />
    )}
  </header>
);

export default Header;
