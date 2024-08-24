import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledTestimoniCrousel = styled.div`
  padding-bottom: 2.5rem;
  .crousel-testimoni {
    background-color: var(--color-card);
    padding: 2rem;
    height: 250px;
  }
  .crousel-testimoni-item {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: nowrap; */
    border-radius: 8px;
  }

  .content-testimoni {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .img-testimoni img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
  }

  .text-testimoni h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: var(--color-normal);
  }

  .text-testimoni p {
    margin: 0;
    font-size: 16px;
    color: var(--color-text-navbar);
  }

  .icon svg {
    font-size: 50px;
    color: var(--primary-color);
  }

  p.pharagraf {
    color: var(--color-text-navbar);
    font-size: 15px;
    line-height: 1.5rem;
  }

  @media (max-width: 992px) {
    .crousel-testimoni {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    .crousel-testimoni {
      height: 300px;
    }
    .crousel-testimoni-item {
      /* flex-direction: column; */
      align-items: flex-start;
    }

    .img-testimoni img {
      width: 60px;
      height: 60px;
    }

    .text-testimoni h3 {
      font-size: 14px;
      font-weight: 500;
    }

    .text-testimoni p {
      font-size: 13px;
    }
    .pharagraf {
      text-align: justify;
    }
  }
`;

const TestimoniCrousel = ({ nama, img, jabatan, deskripsi }) => {
  const defaultFotoUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200';
  return (
    <StyledTestimoniCrousel>
      <section className="crousel-testimoni ">
        <section className="crousel-testimoni-item mb-3 ">
          <div className="content-testimoni ">
            <div className="img-testimoni">
              <img src={img || defaultFotoUrl} alt={`Foto ${nama}`} />
            </div>
            <div className="text-testimoni">
              <h3 className="">{nama}</h3>
              <p>{jabatan}</p>
            </div>
          </div>
          <div className="icon ">
            <i>
              <FontAwesomeIcon icon={faQuoteRight} />
            </i>
          </div>
        </section>
        <p className="pharagraf">{deskripsi}</p>
      </section>
    </StyledTestimoniCrousel>
  );
};

export default TestimoniCrousel;
