import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({ spendings, budget, setBudget, budgetIsValid, setBudgetIsValid }) => (
  <header>
    <h1>Planificador de Gastos</h1>
    {budgetIsValid ? (
      <BudgetControl spendings={spendings} budget={budget} />
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
