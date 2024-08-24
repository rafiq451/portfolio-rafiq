import React from 'react';
import styled from 'styled-components';
const StyledComponent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;

  @media (max-width: 576px) {
    padding: 0.8rem;
  }
`;

const ContainerComponent = ({ children }) => {
  return <StyledComponent>{children}</StyledComponent>;
};

export default ContainerComponent;
