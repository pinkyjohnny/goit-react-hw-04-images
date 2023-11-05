import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;

  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  background-color: rgba(250, 235, 215, 0.481);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const WrapperModal = styled.div`
  max-width: 1000px;
  max-height: 700px;
  position: relative;
  
  padding: 20px;
  overflow: hidden;
  border-radius: 5px;
 
  button {
  
  }

  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  overflow: hidden;
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Button = styled.button`
  position: absolute;
  top: 6px;
  right: 3px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
