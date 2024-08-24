import React from 'react';
import styled from 'styled-components';
import ContainerComponent from '../ContainerComponent/ContainerComponent';
import Carousel from 'react-multi-carousel';
import Html from '../../assets/skills/html.svg';
import Css from '../../assets/skills/css.svg';
import Js from '../../assets/skills/js.svg';
import Php from '../../assets/skills/php.svg';
import Mysql from '../../assets/skills/mysql.svg';
import Bootstrap from '../../assets/skills/bootstrap.svg';
import Tailwind from '../../assets/skills/tailwindcss.svg';
import Reactjs from '../../assets/skills/react.svg';
import Nodejs from '../../assets/skills/nodejs.svg';

const StyledSkillsCarousel = styled.div``;

const StyledCarousel = styled(Carousel)`
  padding-left: 4rem;

  .card-item-img {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .card-item-img img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.6); /* Menambahkan efek grayscale */
  }

  .react-multi-carousel-dot button {
    background: #000;
    border: none;
  }

  .react-multi-carousel-dot--active button {
    background: var(--primary-color);
  }

  @media (max-width: 991px) {
    padding-left: 3rem;
  }

  @media (max-width: 576px) {
    .react-multi-carousel-item {
      padding-left: 0;
    }
  }
`;

const SkillsCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const skillsImages = [
    { src: Html, alt: 'HTML' },
    { src: Css, alt: 'CSS' },
    { src: Js, alt: 'JavaScript' },
    { src: Php, alt: 'PHP' },
    { src: Mysql, alt: 'MySQL' },
    { src: Bootstrap, alt: 'Bootstrap' },
    { src: Tailwind, alt: 'Tailwind CSS' },
    { src: Reactjs, alt: 'React.js' },
    { src: Nodejs, alt: 'Node.js' },
  ];

  return (
    <StyledSkillsCarousel>
      <ContainerComponent>
        <StyledCarousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} customTransition="transform 1s ease" transitionDuration={1000} arrows={false}>
          {skillsImages.map((image, index) => (
            <div className="card-item-img" key={index}>
              <picture>
                <img src={image.src} alt={image.alt} />
              </picture>
            </div>
          ))}
        </StyledCarousel>
      </ContainerComponent>
    </StyledSkillsCarousel>
  );
};

export default SkillsCarousel;
