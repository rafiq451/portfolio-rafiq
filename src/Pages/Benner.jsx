import React from 'react';
import styled from 'styled-components';
import foto from '../assets/blogs/benner.png';
import foto1 from '../assets/blogs/benner2.png';

const BennerSection = styled.section`
  width: 100%;
  background-color: #0d0d0d;
  display: flex;
  flex-direction: column; /* Tumpuk vertikal */
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 10px 0;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const Benner = () => {
  return (
    <BennerSection>
      <BannerWrapper>
        <BannerImage src={foto} alt="gambar benner" />
      </BannerWrapper>
      <BannerWrapper>
        <BannerImage src={foto1} alt="gambar benner2" />
      </BannerWrapper>
    </BennerSection>
  );
};

export default Benner;
