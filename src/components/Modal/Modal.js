import Modal from 'react-modal';
import { Overlay, BigImg } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalImg = ({ isModalOpen, onClose, largeUrl }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="onRequestClose Example"
    >
      <Overlay>
        <div>
          <BigImg src={largeUrl} alt={'опис'} />
        </div>
      </Overlay>
    </Modal>
  );
};
