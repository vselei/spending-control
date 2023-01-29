import CloseBtn from '../img/close.svg';

const Modal = ({ setModal }) => {
  const handleModalHidden = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="Fechar modal" onClick={handleModalHidden} />
      </div>
    </div>
  );
};

export default Modal;
