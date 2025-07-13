import React from 'react';
import styled from 'styled-components';
import foto from '../assets/blogs/benner.png';

const BennerSection = styled.section`
  width: 100%;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 1200px;
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
      <BannerImage src={foto} alt="gambar benner" />
    </BennerSection>
  );
};

export default Benner;
