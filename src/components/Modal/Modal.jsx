import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper, WrapperModal } from './Modal.styled';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOut = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <Wrapper>
        <WrapperModal>
          <Button onClick={this.props.close}>✖️</Button>
          {this.props.children}
        </WrapperModal>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
