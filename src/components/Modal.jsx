import CloseBtn from '../img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const handleModalHidden = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="Fechar modal" onClick={handleModalHidden} />
      </div>

      <form className={`form ${animateModal ? 'animate' : 'close'}`}>
        <legend>Novo gasto</legend>

        <div className="field">
          <label htmlFor="name">Nome do Gasto</label>
          <input id="name" type="text" placeholder="Adicione o nome do gasto" />
        </div>
        <div className="field">
          <label htmlFor="qty">Quantidade</label>
          <input
            id="qty"
            type="number"
            placeholder="Adicione o quanto foi gasto: ex. 300"
          />
        </div>
        <div className="field">
          <label htmlFor="filter">Quantidade</label>
          <select id="filter">
            <option value="">-- Selecione --</option>
            <option value="economy">Economia</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="miscellaneous">Diverso</option>
            <option value="lounge">Lazer</option>
            <option value="health">Saúde</option>
            <option value="subscriptions">Assinatura</option>
          </select>
        </div>
        <input type="submit" value="Adicionar Despesa" />
      </form>
    </div>
  );
};

export default Modal;
