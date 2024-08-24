import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import styles untuk carousel
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import TestimoniCrousel from '../components/Crousel/TestimoniCrousel';
import gambarRafiq from '../assets/about/rafiq.jpeg';

const StyledTestimoniCarousel = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-dot-list {
    display: flex;
    justify-content: center;
    overflow: hidden; /* Sembunyikan dots yang berada di luar area visible */
  }

  .react-multi-carousel-dot {
    display: none; /* Sembunyikan semua dots */
  }

  .react-multi-carousel-dot:nth-child(-n + 3) {
    display: block; /* Tampilkan hanya 3 dots pertama */
  }

  .react-multi-carousel-dot button {
    background: var(--color-hero);
    border: none;
  }

  .react-multi-carousel-dot--active button {
    background: var(--color-normal);
    z-index: 10; /* Z-index untuk dot yang aktif */
  }

  .react-multi-carousel-item {
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    .react-multi-carousel-item {
      padding: 0 0.5rem;
    }
  }
`;

const Testimoni = () => {
  const data = [
    {
      id: 1,
      nama: 'Muhammad Rafiq',
      img: gambarRafiq,
      jabatan: 'Front-End',
      deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.olor sit amet, consectetur adipisicingconsectetur adipisicing',
    },
    {
      id: 2,
      nama: 'Blabir Kublak',
      img: gambarRafiq,
      jabatan: 'Front-End',
      deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.olor sit amet, consectetur adipisicingconsectetur adipisicing',
    },
    {
      id: 3,
      nama: 'Sokin Joni',
      img: gambarRafiq,
      jabatan: 'Front-End',
      deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.olor sit amet, consectetur adipisicingconsectetur adipisicing',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <StyledTestimoniCarousel>
      <Title title="Testimonials" subtitle="Testimonials" />
      <ContainerComponent>
        <section className="content">
          <StyledCarousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            customTransition="transform 1s ease"
            transitionDuration={1000}
            arrows={false}
            showDots={true} // Pastikan showDots diatur ke true
          >
            {data.map((item) => (
              <TestimoniCrousel key={item.id} nama={item.nama} img={item.img} jabatan={item.jabatan} deskripsi={item.deskripsi} />
            ))}
          </StyledCarousel>
        </section>
      </ContainerComponent>
    </StyledTestimoniCarousel>
  );
};

export default Testimoni;
