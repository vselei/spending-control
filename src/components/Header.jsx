import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({
  spendings,
  setSpendings,
  budget,
  setBudget,
  budgetIsValid,
  setBudgetIsValid
}) => (
  <header>
    <h1>Planificador de Gastos</h1>
    {budgetIsValid ? (
      <BudgetControl spendings={spendings} setSpendings={setSpendings} budget={budget} setBudget={setBudget} setBudgetIsValid={setBudgetIsValid} />
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
