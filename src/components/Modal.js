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

  onKeyDown = ({ keyCode }) => keyCode === 27 && this.onClose();

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText } = this.props;
    return (
      <Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => this.openButton = n}
          text={triggerText}
        />
        {isOpen &&
          <ModalContent
            ariaLabel={ariaLabel}
            content={children}
            onClose={this.onClose}
            buttonRef={n => this.closeButton = n}
            onKeyDown={this.onKeyDown}
          />
        }
      </Fragment>
    );
  }
}

export default Modal;
