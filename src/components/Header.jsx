import NewBudget from './NewBudget';

const Header = ({ budget, setBudget }) => (
  <header>
    <h1>Planificador de Gastos</h1>
    <NewBudget budget={budget} setBudget={setBudget} />
  </header>
);

export default Header;
