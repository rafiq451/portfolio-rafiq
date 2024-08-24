import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { Link } from 'react-router-dom';

const StyledAll = styled.div`
  .card-portfolio {
    position: relative;
    max-width: 100%;
    height: 370px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out; /* Tambahkan transisi pada transformasi */

    /* Hover Effect */
    &:hover {
      transform: scale(1.05); /* Zoom in effect */
    }

    &:hover .data-label {
      opacity: 1;
      transform: translateY(0); /* Pastikan label data muncul dari bawah */
    }
  }

  /* Gaya Gambar */
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out; /* Tambahkan transisi pada gambar */
  }

  /* Label Data */
  .data-label {
    color: var(--color-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transform: translateY(20px); /* Label mulai dari bawah */
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Tambahkan transisi pada opacity dan transformasi */

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-top: 0.5rem;
    }

    svg {
      font-size: 30px;
      font-weight: 700;
      color: var(--primary-color);
    }

    a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 15px;
      font-weight: 500;
    }
  }

  /* Caption/Title */
  .title {
    font-size: 16px;
    color: var(--color-normal);
    margin-top: 1rem;
    transition: opacity 0.3s ease-in-out; /* Transisi untuk caption jika diperlukan */
  }

  @media (max-width: 576px) {
    .card-portfolio {
      height: 250px;
    }

    .data-label h3 {
      font-size: 18px;
      font-weight: 500;
    }

    .data-label svg {
      font-size: 20px;
    }

    .data-label a {
      font-size: 12px;
    }
    .title {
      font-size: 14px;
    }
  }
`;

const All = ({ project, className }) => {
  return (
    <StyledAll className={className}>
      <div className="card-portfolio">
        <picture>
          <img src={project.image} alt={`Gambar portfolio ${project.title}`} />
          <div className="data-label">
            <div className="icon">
              <i>
                <FontAwesomeIcon icon={faLink} />
              </i>
            </div>
            <h3>{project.title}</h3>
            <Link to={project.link}>View Project</Link>
          </div>
        </picture>
      </div>
      <h3 className="title">{project.description}</h3>
    </StyledAll>
  );
};

export default All;
