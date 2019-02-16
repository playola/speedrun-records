import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecordItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 12px;
  max-width: 768px;
  width: 90%;

  &:hover {
    background-color: lightgray;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`;

export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 45%;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
`;
