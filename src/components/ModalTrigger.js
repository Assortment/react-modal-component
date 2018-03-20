import React from 'react';

const ModalTrigger = ({ onOpen }) => {
  return (
    <button
      className="c-btn"
      onClick={onOpen}>
      This is a button to trigger the Modal
    </button>
  );
}

export default ModalTrigger;
