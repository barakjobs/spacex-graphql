import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
`;

export const Input = styled.input`
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  font-size: 18px;
  margin: 10px;
  padding: 10px;
`;
