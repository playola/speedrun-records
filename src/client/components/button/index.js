import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;

  &:hover {
    background-color: lightgray;
  }
`;

export default Button;
