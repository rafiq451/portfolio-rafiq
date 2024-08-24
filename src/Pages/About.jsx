import React from 'react';
import styled from 'styled-components';
import gambarRafiq from '../assets/about/rafiq.jpeg';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import Button from '../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

const StyledAbout = styled.div`
  padding-top: 2rem;

  .about-img {
    position: relative;
    max-width: 450px;
    height: 520px;
    overflow: hidden;
    margin: 0 auto;
  }

  .about-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about-text {
    color: var(--color-text-navbar);
  }

  .about-text h1 {
    color: var(--primary-color);
    font-size: 24px;
  }

  .about-text h2 {
    color: var(--color-normal);
    font-weight: 700;
    font-size: 32px;
    line-height: 1.5;
  }

  .about-text p {
    font-size: 15px;
  }

  .about-text .text::after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    background-color: var(--color-text-navbar);
    z-index: 1;
  }

  /* Biodata */
  .biodata {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 75%;
  }

  .biodata .biodata-item p {
    color: var(--color-normal);
    font-weight: 500;
  }

  .biodata .biodata-item p span {
    color: var(--color-text-navbar);
    font-weight: 400;
    margin-left: 5px;
  }

  @media (max-width: 992px) {
    .about {
      margin: 0 auto;
      width: 98%;
    }

    .about-img {
      max-width: 350px;
      height: 310px;
      border-radius: 50%;
    }

    .about-img img {
      border-radius: 50%;
    }
  }

  @media (max-width: 576px) {
    .about {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .about-img {
      max-width: 310px;
      height: 280px;
      border-radius: 50%;
    }

    .about-img img {
      border-radius: 50%;
    }

    .about-text .text::after {
      width: 100%;
    }

    .about-text h2 {
      font-size: 28px;
    }

    .about-text p {
      text-align: justify;
    }

    .biodata {
      max-width: 100%;
      align-items: start;
      flex-direction: column;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <ContainerComponent>
        <section className="row about gap-2">
          <div className="col-lg-5 about-img">
            <picture>
              <img src={gambarRafiq} alt="Gambar Rafiq" />
            </picture>
          </div>
          <div className="col-lg-7 about-text mt-4">
            <div className="text d-flex flex-column gap-2">
              <h1>Who am I?</h1>
              <h2>I’m Muhammad Rafiq, a visual UX/UI Designer and Web Developer</h2>
              <p className="lh-lg">
                Saya adalah web developer frontend yang berdedikasi dengan pengalaman lebih dari 3 tahun. Ahli dalam membangun antarmuka pengguna responsif dan interaktif menggunakan HTML, CSS, JavaScript, serta framework seperti React.js
                dan framework CSS lain nya. Berpengalaman dalam optimasi performa website.
              </p>
            </div>
            <section className="biodata">
              <div className="biodata-item">
                <p>
                  Name: <span>Muhammad Rafiq</span>
                </p>
                <p>
                  Age: <span>21</span>
                </p>
              </div>
              <div className="biodata-item">
                <p>
                  From: <span>Kec Leuwiliang, Bogor</span>
                </p>
                <p>
                  Email: <span>ibab7810@gmail.com</span>
                </p>
              </div>
            </section>
            <div className="mt-3">
              <Button text="Download CV">
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </div>
        </section>
      </ContainerComponent>
    </StyledAbout>
  );
};

export default About;
