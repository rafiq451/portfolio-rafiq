import React from 'react';
import styled from 'styled-components';
const StyledTitle = styled.div`
  .resume-title {
    position: relative;
    margin: auto;
    max-width: 1200px;
  }

  .resume-title h1.title {
    font-size: 114px;
    color: var(--color-bg);
    font-weight: 800;
    -webkit-text-stroke: 0.8px var(--color-text);
    text-transform: uppercase;
    white-space: nowrap;
  }

  .resume-title .subtitle {
    position: absolute;
    top: 40%;
    left: 0;

    color: var(--color-normal);
  }
  .resume-title .subtitle h2 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 992px) {
    .resume-title {
      margin-left: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    .resume-title {
      margin-left: 0.5rem;
      overflow: hidden;
    }
  }
`;
const Title = ({ title, subtitle }) => {
  return (
    <StyledTitle>
      <section className="resume-title">
        <h1 className="title">{title}</h1>
        <div className="subtitle">
          <h2>{subtitle}</h2>
        </div>
      </section>
    </StyledTitle>
  );
};

export default Title;
