import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = ({ onClose }) => {
  return ReactDOM.createPortal(
    <aside className="c-modal-cover" role="dialog" aria-label="A label describing the Modal's current content" tabIndex="-1">
      <div className="c-modal">
        <button className="c-modal__close" aria-label="Close Modal" onClick={onClose}>
          <span className="u-hide-visually">Close</span>
          <svg viewBox="0 0 40 40" className="c-modal__close-icon">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </svg>
        </button>
        <div className="c-modal__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
          <p style={{ marginBottom: 0 }}>Nunc semper eu lectus ac blandit. Fusce iaculis dolor sit amet felis placerat, non auctor nibh pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean a tempus lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus, sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus urna tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</p>
        </div>
      </div>
    </aside>,
    document.querySelector('body')
  );
}

export default ModalContent;
