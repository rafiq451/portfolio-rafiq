import React, { useEffect, useState } from 'react';
import { GitHub, Instagram, Linkedin, Facebook } from 'react-feather';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFollowme = styled.div`
  display: ${({ $blok }) => ($blok ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-text);
  padding: 0.5rem;
  position: fixed;
  gap: 1.2rem;
  bottom: 20%;
  left: ${({ $visible }) => ($visible ? '2px' : '-32px')};
  z-index: 100;
  color: var(--color-normal);
  transition: left 0.4s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .title {
    writing-mode: vertical-rl;
    font-size: 14px;
    font-weight: bold;
    color: var(--color-normal);
  }

  .garis {
    width: 2px;
    height: 2rem;
    background-color: var(--primary-color);
  }

  .sosmed ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sosmed a {
    color: var(--color-normal);
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .sosmed a:hover {
    transform: scale(1.2);
    color: var(--primary-color);
  }

  @media (min-width: 1280px) {
    display: ${({ $blok }) => ($blok ? 'flex' : 'none')};
    left: ${({ $visible }) => ($visible ? '2px' : '-4px')};
    /* background-color: transparent; */
  }

  @media (min-width: 1400px) {
    display: flex;
    left: 2px;
  }
`;

const StyledTrigger = styled.div`
  position: fixed;
  bottom: 40.5%;
  left: ${({ $visible }) => ($visible ? '10px' : '-30px')}; /* Sebagian tersembunyi */
  z-index: 101;
  width: 60px;
  height: 60px;
  background-color: var(--color-text);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 50% 0%); /* Setengah segi enam kanan */
  display: ${({ $showTrigger }) => ($showTrigger ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  span {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    bottom: 34.5%;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

const Followme = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlok, setIsBlok] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = () => {
    // Tampilkan menu utama di desktop saat scroll melebihi 300px
    setIsBlok(window.pageYOffset > 300);

    // Tampilkan tombol trigger di mobile setelah scroll lebih dari 100px
    setShowTrigger(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Menu utama */}
      <StyledFollowme $visible={isVisible} $blok={isBlok}>
        {/* Tombol trigger */}
        <StyledTrigger $visible={isVisible} $showTrigger={showTrigger} onClick={handleToggle}>
          <span>{isVisible ? '❮' : '❯'}</span>
        </StyledTrigger>
        <div className="vertical-line"></div>
        <section className="title">
          <h5>Follow Me</h5>
        </section>
        <div className="garis"></div>
        <section className="sosmed">
          <ul>
            <li>
              <Link to="https://github.com/rafiq451">
                <GitHub />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/m.rafiqsans/">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/muhammad-rafiq-ab5722228/">
                <Linkedin />
              </Link>
            </li>
          </ul>
        </section>
      </StyledFollowme>
    </>
  );
};

export default Followme;
