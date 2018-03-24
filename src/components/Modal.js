import React, { Component, Fragment } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

class Modal extends Component {
  state = { isOpen: false }

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  }

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButton.focus();
    this.toggleScrollLock();
  }

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => this.openButton = n}
          text="This is a button to trigger the Modal"
        />
        {isOpen &&
          <ModalContent
            ariaLabel="A label describing the Modal's current content"
            onClose={this.onClose}
            buttonRef={n => this.closeButton = n}
          />
        }
      </Fragment>
    );
  }
}

export default Modal;
