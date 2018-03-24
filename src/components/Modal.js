import React, { Component, Fragment } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

class Modal extends Component {
  state = { isOpen: false }

  onOpen = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
        />
        {isOpen &&
          <ModalContent
            ariaLabel="A label describing the Modal's current content"
            onClose={this.onClose}
          />
        }
      </Fragment>
    );
  }
}

export default Modal;
