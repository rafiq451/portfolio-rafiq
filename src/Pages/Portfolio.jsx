import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import MenuPortfolio from '../utils/MenuPortfolio';
import { Link } from 'react-router-dom';
import All from './PortfolioPage/All';
import Button from '../components/Button/Button';

const StyledPortfolio = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
  }

  .menu {
    /* padding: 0 1.5rem 0rem 1.5rem; */
  }

  .menu-item a {
    font-size: 15px;
    color: var(--color-normal);
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      font-weight: bold;
      color: var(--primary-color);
    }
    &.active::after {
      content: '';
      display: block;
      width: 60%;
      margin-left: 20%;
      height: 2px;
      background-color: var(--primary-color);
      margin-top: 0.5rem;
    }
  }

  .content-portfolio {
    margin-top: 1.5rem;
    text-align: center;
    padding: 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
    &.hidden {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  @media (max-width: 992px) {
    .content-portfolio {
      padding: 0 2rem 0 2rem;
    }
  }

  @media (max-width: 576px) {
    .content-portfolio {
      padding: 0 0.2rem 0 0.2rem;
    }
  }
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [transitionClass, setTransitionClass] = useState('visible');

  // Filter proyek berdasarkan kategori yang aktif
  const filteredProjects = MenuPortfolio.filter((project) => activeTab === 'All' || project.category === activeTab);

  // Batasi jumlah proyek yang ditampilkan
  const projectsToShow = filteredProjects.slice(0, 6);

  // Fungsi untuk mengubah kategori dan menerapkan transisi
  const handleTabChange = (category) => {
    setTransitionClass('hidden'); // Mulai transisi keluar
    setTimeout(() => {
      setActiveTab(category);
      setTransitionClass('visible'); // Mulai transisi masuk
    }, 400); // Waktu yang sama dengan durasi transisi CSS
  };

  // Menggunakan useEffect untuk menangani perubahan tab dan menerapkan transisi
  useEffect(() => {
    setTransitionClass('hidden'); // Mulai transisi keluar
    const timer = setTimeout(() => {
      setTransitionClass('visible'); // Mulai transisi masuk
    }, 400); // Waktu yang sama dengan durasi transisi CSS

    return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
  }, [activeTab]);

  return (
    <StyledPortfolio>
      <Title title="Portfolio" subtitle="My Projects" />
      <ContainerComponent>
        <section className="content">
          <div className="menu">
            <section className="d-flex justify-content-center flex-wrap gap-3">
              <div className="menu-item">
                <Link to="#" className={`text-decoration-none fw-medium ${activeTab === 'All' ? 'active' : ''}`} onClick={() => handleTabChange('All')}>
                  All
                </Link>
              </div>
              <div className="menu-item">
                <Link to="#" className={`text-decoration-none fw-medium ${activeTab === 'Website' ? 'active' : ''}`} onClick={() => handleTabChange('Website')}>
                  Website
                </Link>
              </div>
              <div className="menu-item">
                <Link to="#" className={`text-decoration-none fw-medium ${activeTab === 'UI/UX' ? 'active' : ''}`} onClick={() => handleTabChange('UI/UX')}>
                  UI/UX
                </Link>
              </div>
              <div className="menu-item">
                <Link to="#" className={`text-decoration-none fw-medium ${activeTab === 'Document' ? 'active' : ''}`} onClick={() => handleTabChange('Document')}>
                  Document
                </Link>
              </div>
            </section>
          </div>
          <div className={`content-portfolio row ${transitionClass}`}>
            {/* Tampilkan proyek yang difilter */}
            {projectsToShow.length > 0 ? projectsToShow.map((project, index) => <All key={index} project={project} className="mb-4 col-6 col-lg-4" />) : <p>No projects available under this category.</p>}
          </div>
          <div className="button d-flex justify-content-center">
            <Button Regular={true} text="View All Portfolio" />
          </div>
        </section>
      </ContainerComponent>
    </StyledPortfolio>
  );
};

export default Portfolio;
