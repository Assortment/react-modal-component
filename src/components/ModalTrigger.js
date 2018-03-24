import React from 'react';

const ModalTrigger = ({
  buttonRef,
  onOpen
}) => {
  return (
    <button
      className="c-btn"
      onClick={onOpen}
      ref={buttonRef}>
      This is a button to trigger the Modal
    </button>
  );
}

export default ModalTrigger;
