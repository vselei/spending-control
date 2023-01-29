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
      </form>
    </div>
  );
};

export default Modal;
