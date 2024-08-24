import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 0.8rem 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  color: var(--color-normal);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  ${(props) =>
    props.$Regular &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      transition: color 0.3s ease, border-color 0.3s ease;

      &:hover {
        background-color: var(--primary-color);
        color: var(--color-normal);
        border-color: var(--primary-color);
      }
    `}
`;

const Button = ({ children, text, className, type, Regular }) => {
  const iconArrow = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <StyledButton $Regular={Regular} className={className} type={type}>
      <span className="text-button">{text}</span>
      <span className="icon">{children || iconArrow}</span>
    </StyledButton>
  );
};

export default Button;
