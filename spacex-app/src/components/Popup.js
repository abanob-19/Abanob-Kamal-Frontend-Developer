import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Initialize react-modal
Modal.setAppElement('#root'); // Set the root element for accessibility

const Popup = ({ rocket , onClose}) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    // Open the modal when the component mounts4
    console.log(modalIsOpen);
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Rocket Details"
    >
      <div className="modal-content">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <p>Company: {rocket.company}</p>
        <p>Active: {rocket.active ? 'Yes' : 'No'}</p>
      </div>
    </Modal>
  );
};

export default Popup;
