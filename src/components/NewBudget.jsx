const NewBudget = () => (
  <div className="budget-container container shadow">
    <form className="form">
      <div className="field">
        <label>Definir Orçamento</label>
        <input
          className="new-budget"
          type="text"
          placeholder="Adicione seu orçamento"
        />
      </div>
      <input type="submit" value="Adicionar" />
    </form>
  </div>
);

export default NewBudget;
