import React from 'react';
import styled from 'styled-components';
const StyledCardResume = styled.div`
  .resume-item-card {
    padding: 2rem 3rem 2rem 2.5rem;
    position: relative;
    background-color: var(--color-card);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-left: 3px solid var(--primary-color); /* Garis kiri dengan warna utama */
    border-bottom: 1px solid var(--color-text);
  }

  .resume-item-card h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
  .resume-item-card h3::before {
    content: '';
    left: 0;
    top: 18%;
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 8px;
    background-color: var(--primary-color);
  }

  .resume-item-card span,
  p {
    color: var(--color-text-navbar);
    margin-top: 1rem;
  }

  @media (max-width: 992px) {
    .resume-item-card h3 {
      font-size: 18px;
    }

    .resume-item-card span,
    p {
      font-size: 15px;
    }
  }
`;
const CardResume = ({ title, subtitle, content }) => {
  return (
    <StyledCardResume>
      <section className="resume-item-card">
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <p>{content}</p>
      </section>
    </StyledCardResume>
  );
};

export default CardResume;
