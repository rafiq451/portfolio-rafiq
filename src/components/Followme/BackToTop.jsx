import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';
import styled from 'styled-components';

const StyleBackToTop = styled.div`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')}; /* Default hidden */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background-color: var(--primary-color);
  color: var(--color-normal);
  border: none;
  padding: 10px 11px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  i {
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyleBackToTop onClick={scrollToTop} $visible={isVisible}>
      <ArrowUp />
    </StyleBackToTop>
  );
};

export default BackToTop;
