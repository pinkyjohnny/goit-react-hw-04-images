import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const SearchButton = styled.button`
  margin-right: 15px;
  padding: 4px 5px;
  font-size: 15px;
  border-radius: 9px;
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

export const SearchInput = styled.input`
  border-radius: 15px;
  border: 1px solid;
  padding: 8px 10px;
  width: 200px;
`;
