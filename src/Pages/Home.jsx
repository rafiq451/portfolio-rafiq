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
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Portfolio Rafiq - Frontend Developer | React & UI/UX</title>
        <meta name="description" content="Portfolio Muhammad Rafiq, Frontend Developer React.js dan UI/UX Designer. Website modern, cepat, dan interaktif untuk kebutuhan digital Anda." />
        <meta name="keywords" content="Portfolio Rafiq, Frontend Developer, React.js Developer, UI UX Designer, jasa pembuatan website, web developer Indonesia" />
        <link rel="canonical" href="https://portfolio-rafiq.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio Rafiq - Frontend Developer" />
        <meta property="og:description" content="Lihat hasil karya dan layanan jasa pembuatan website modern oleh Muhammad Rafiq." />
        <meta property="og:image" content="https://portfolio-rafiq.vercel.app/images/preview.jpg" />
        <meta property="og:url" content="https://portfolio-rafiq.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
