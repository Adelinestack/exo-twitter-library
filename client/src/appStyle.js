import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Subject = styled.div`
  display: flex;
  & label {
    margin-right: 10px;
  }
`;
