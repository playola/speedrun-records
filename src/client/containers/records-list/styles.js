import styled from 'styled-components';

export const RecordsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const RecordItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  margin: 6px 0;
  padding: 6px 12px;
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
