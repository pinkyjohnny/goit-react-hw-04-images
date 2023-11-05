import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper, WrapperModal } from './Modal.styled';

export const Modal = ({ close, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleClickClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return (
    <Wrapper onClick={handleClickClose}>
      <WrapperModal>
        <Button onClick={close}>✖️</Button>
        {children}
      </WrapperModal>
    </Wrapper>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
