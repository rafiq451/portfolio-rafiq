import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.div`
  padding: 1rem;
  background-color: var(--color-card);
  text-align: center;
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 300;
    color: var(--color-normal);
  }

  span {
    font-weight: 600;
    color: var(--primary-color);
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © 2024 <span>Muhammad Rafiq</span> All rights reserved.
      </p>
    </StyledFooter>
  );
};

export default Footer;
