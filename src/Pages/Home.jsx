import React from 'react';
import Herro from '../components/Herro/Herro';
import styled from 'styled-components';
import bgGaris from '../assets/garis.png';

import About from './About';
import Resume from './Resume';
import Certificate from './Certificate';
import Skill from './Skill';
import Service from './Service';
import Portfolio from './Portfolio';
import Testimoni from './Testimoni';
import Blogs from './Blogs';
import Contact from './Contact';

const StyledHome = styled.div`
  background-color: #121212;

  .bg-garis {
    position: relative;
    width: 100%;
    height: 100%; // Agar background memenuhi area secara vertikal
    background-image: url(${(props) => props.$bgGaris});
    background-repeat: no-repeat;
    z-index: 2;
  }

  // Untuk menambah kesan layering
  .content {
    position: relative;
    z-index: 2; // Ini agar konten tetap di atas background
  }
`;

const Home = () => {
  return (
    <>
      <Herro />
      <StyledHome $bgGaris={bgGaris}>
        <section className="bg-garis">
          <div className="content ">
            <About />
            <Resume />
            <Certificate />
            <Skill />
            <Service />
            <Portfolio />
            <Testimoni />
            <Blogs />
            <Contact />
          </div>
        </section>
      </StyledHome>
    </>
  );
};

export default Home;
