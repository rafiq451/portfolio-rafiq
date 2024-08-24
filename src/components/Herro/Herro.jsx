import React from 'react';
import styled from 'styled-components';
import bghero from '../../assets/herobg/bghero.png';
import Button from '../Button/Button';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';

// Perbaikan nama komponen dari StyledHerro menjadi StyledHero
const StyledHero = styled.div`
  color: var(--color-normal);
  /* margin-top: -5rem; */
  .bg_hero {
    position: relative;
    width: 100%;
    display: block;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
    height: 640px;
    background-repeat: no-repeat;
  }

  .bg_hero::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #121212 0%, rgba(255, 255, 255, 0) 25%);
    z-index: 1;
    /* border: 1px solid red; */
  }

  .content {
    position: absolute;
    top: 30%;
    z-index: 2;
    color: var(--color-normal);
  }

  .content h2 {
    font-size: 2.3rem;
    font-weight: 300;
  }

  .content h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }
  .content h1 span {
    color: var(--primary-color);
  }
  .content h1 span.cursor {
    font-weight: 400;
  }

  .container {
    max-width: 1300px;
    margin: auto;
    padding: 0 15pt;
  }

  .info-region {
    position: absolute;
    bottom: 0;
    z-index: 3;
    color: var(--color-normal);
    display: flex;
    padding-bottom: 2rem;
    justify-content: center;
    gap: 1.5rem;
  }

  .info-item {
    padding: 0 2.5rem 0.5rem 0;
    border-right: 1px solid var(--color-normal);
  }
  .info-item h4 {
    /* margin: 0; */
    font-size: 17px;
    color: var(--color-normal);
  }
  .info-item span {
    font-size: 15px;
    color: var(--color-text-navbar);
  }

  @media (max-width: 576px) {
    /* margin-top: -4rem; */
    .bg_hero {
      height: 550px;
    }
    .content {
      position: absolute;
      top: 18%;
      z-index: 2;
      color: var(--color-normal);
    }
    .content h2 {
      font-size: 1.5rem;
      font-weight: 300;
    }

    .content h1 {
      font-size: 2rem;
      font-weight: 700;
    }
    .info-region {
      flex-direction: column;
      gap: 1rem;
      align-items: start;
    }
    .info-item {
      padding: 0 2.5rem 0.5rem 2.5rem;
      border-right: none;
      border-left: 1px solid var(--color-normal);
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero $bgImg={bghero}>
      <section className="bg_hero">
        <div className="container">
          <div className="content">
            <h2>Hi There!</h2>
            <h1 className="">
              I am {''} <Typewriter words={['M.Rafiq', 'Web Developer', 'Frontend Dev', 'UI / UX Designer', 'Freelancer']} typeSpeed={150} loop={true} />
              <span className="cursor">
                <Cursor cursorColor="var(--primary-color)" cursorStyle="_" />
              </span>
            </h1>
            <h2>I make the complex simple</h2>
            <section className="mt-3">
              <Button text="Get in touch" />
            </section>
          </div>
          <section className="info-region">
            <div className="info-item">
              <h4>Email</h4>
              <span>ibab7810@gmail.com</span>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <span>0882-9126-2899</span>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <span>Purasari, Bogor</span>
            </div>
          </section>
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
