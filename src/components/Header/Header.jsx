import React from 'react';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
const StyledHeader = styled.div``;
const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
