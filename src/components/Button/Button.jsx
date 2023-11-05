import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  onclick: PropTypes.func,
};
