import React from 'react';

const ModalTrigger = ({
  buttonRef,
  onOpen,
  text
}) => <button className="c-btn" onClick={onOpen} ref={buttonRef}>{text}</button>;

export default ModalTrigger;
