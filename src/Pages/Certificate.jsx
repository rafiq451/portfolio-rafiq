import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import Data from '../assets/sertifikat/data.png';
import Puisi from '../assets/sertifikat/puisi.jpg';
import Fe from '../assets/sertifikat/fe.png';
import Web from '../assets/sertifikat/web.png';
import Infinite from '../assets/sertifikat/infinite.jpg';
import CardSertifikat from '../components/Card/CardSertifikat';
import Button from '../components/Button/Button';

const StyledCertificate = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
  }

  .button {
    display: flex;
    justify-content: center;
  }
`;

const Certificate = () => {
  const datasertifikat = [
    { id: 1, img: Fe, title: 'Front-End Developer' },
    { id: 2, img: Web, title: 'Web Developer ' },
    { id: 3, img: Infinite, title: 'Infinite Learning' },
    { id: 4, img: Puisi, title: 'Puisi' },
    { id: 5, img: Data, title: 'Data Science' },
  ];

  return (
    <StyledCertificate>
      <Title title="Certificate" subtitle="My Certificate" />
      <ContainerComponent>
        <section className="content row justify-content-center">
          {datasertifikat.map((data, index) => (
            <CardSertifikat key={index} title={data.title} img={data.img} className="col-lg-4 col-md-6 col-sm-12" />
          ))}
        </section>
        <div className="button">
          <Button Regular={true} text="View All Certificate" />
        </div>
      </ContainerComponent>
    </StyledCertificate>
  );
};

export default Certificate;
