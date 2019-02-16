import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerWrapper, Title } from '../styles';

const NotFoundPage = () => (
  <ContainerWrapper>
    <Title>Sorry! The page was not found.</Title>
    <p>
      Try navigate to records list instead:
      <Link to="/"> records list</Link>
    </p>
  </ContainerWrapper>
);

export default NotFoundPage;
