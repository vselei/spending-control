const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter shadow container">
      <form>
        <div className="field">
          <label htmlFor="filtering">Filtrar Gastos</label>
          <select
            id="filtering"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">-- Todas as Categorias --</option>
            <option value="economy">Economia</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="miscellaneous">Diverso</option>
            <option value="lounge">Lazer</option>
            <option value="health">Saúde</option>
            <option value="subscriptions">Assinatura</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
