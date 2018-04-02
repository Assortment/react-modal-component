import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  onClickAway,
  onClose,
  onFocus,
  onKeyDown
}) => {
  return ReactDOM.createPortal(
    <aside
      className="c-modal-cover"
      role="dialog"
      aria-label={ariaLabel}
      aria-modal="true"
      tabIndex="-1"
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onClick={onClickAway}
    >
      <div className="c-modal" ref={modalRef}>
        <button className="c-modal__close" aria-label="Close Modal" onClick={onClose} ref={buttonRef}>
          <span className="u-hide-visually">Close</span>
          <svg viewBox="0 0 40 40" className="c-modal__close-icon">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </svg>
        </button>
        <div className="c-modal__body">{content}</div>
      </div>
    </aside>,
    document.querySelector('body')
  );
}

export default ModalContent;
