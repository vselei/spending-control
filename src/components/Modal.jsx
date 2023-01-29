import { useState } from 'react';

import Message from './Message';

import CloseBtn from '../img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal, saveSpendings }) => {
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);
  const [category, setCategory] = useState('');

  const handleModalHidden = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if ([name, qty, category].includes('')) {
      setMessage('Todos os campos são obrigatórios');
      return;
    }

    setMessage('');
    saveSpendings({ name, qty, category });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="Fechar modal" onClick={handleModalHidden} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? 'animate' : 'close'}`}
      >
        <legend>Novo gasto</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="name">Nome do Gasto</label>
          <input
            id="name"
            type="text"
            placeholder="Adicione o nome do gasto"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="qty">Quantidade</label>
          <input
            id="qty"
            type="number"
            placeholder="Adicione o quanto foi gasto: ex. 300"
            value={qty}
            onChange={e => setQty(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="filter">Quantidade</label>
          <select
            id="filter"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
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
