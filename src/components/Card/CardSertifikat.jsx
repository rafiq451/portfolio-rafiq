import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const StyleCertifikat = styled.div`
  .card-serti {
    position: relative;
    max-width: 100%;
    height: 270px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .card-serti img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card-serti:hover img {
    transform: scale(1.05);
  }

  .data-label {
    color: var(--color-normal);
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.797);
    justify-content: center;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .data-label h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0.5rem;
  }
  .data-label svg {
    font-size: 30px;
    font-weight: 700;
    color: var(--primary-color);
  }
  .data-label a {
    text-decoration: none;
    padding: 0;
    margin: 0;
    color: var(--primary-color);
    font-size: 18px;
  }

  .card-serti:hover .data-label {
    opacity: 1;
  }
`;

const CardSertifikat = ({ className, title, img }) => {
  return (
    <StyleCertifikat className={className}>
      <div className="card-serti">
        <picture>
          <source />
          <img src={img} alt="Gambar serti" />
          <div className="data-label">
            <FontAwesomeIcon icon={faAddressCard} />
            <h3>{title}</h3>
            <Link to="/sertifikat">Quick View</Link>
          </div>
        </picture>
      </div>
    </StyleCertifikat>
  );
};

export default CardSertifikat;
