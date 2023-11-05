import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  background-color: rgba(151, 111, 59, 0.673);
  color: white;
  cursor: pointer;
  border: none;

  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(220, 170, 104, 0.673);
    box-shadow: 0 0 10px 2px rgba(90, 64, 31, 0.673);
  }
`;
