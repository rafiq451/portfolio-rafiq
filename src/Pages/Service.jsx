import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faPenNib } from '@fortawesome/free-solid-svg-icons/faPenNib';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const StyledService = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
  }

  /* card-service */
  .card-service {
    flex-wrap: nowrap;
    padding: 0 1.5rem 0rem 1.5rem;
    gap: 1rem;
  }

  .card-service-item {
    padding: 2.5rem;
    position: relative;
    background-color: var(--color-card);
    transition: background-color 0.3s ease-in-out;
  }

  .card-service-item::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
  }

  .card-service-item:hover::after {
    width: 100%;
  }

  .card-service-item .icon svg {
    font-size: 3rem;
    color: var(--primary-color);
  }

  .card-service-item h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 1rem;
    color: var(--color-normal);
  }

  .card-service-item p {
    font-size: 15px;
    color: var(--color-text-navbar);
  }

  /* card-client */
  .card-client {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    gap: 1rem;
    background-color: var(--color-card);
    padding: 2rem;
    justify-content: center;
    position: relative;
  }

  .card-client::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    background-color: var(--primary-color);
    margin-top: 2rem;
  }

  .card-client-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 1rem;
    background-color: var(--color-card);
    gap: 1rem;
    flex: 1 1 calc(33.333% - 2rem);
  }

  .card-client-item h2 {
    font-size: 76px;
    color: var(--primary-color);
    font-weight: 600;
    margin: 0;
  }

  .card-client-item p {
    font-size: 20px;
    color: var(--color-normal);
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 992px) {
    .content {
      padding: 0 3rem;
    }

    .card-service {
      flex-wrap: wrap;
      padding: 0 2px 0rem 2px;
    }

    .card-service-item {
      padding: 2rem;
    }

    .card-client-item {
      flex: 1 1 100%;
    }
  }

  @media (max-width: 576px) {
    .content {
      padding: 0 1rem;
    }

    .card-service {
      padding: 0.2rem;
    }

    .card-client-item {
      flex: 1 1 100%;
      margin-bottom: 1rem;
    }
  }
`;

const Service = () => {
  const services = [
    {
      icon: faCode,
      title: 'Web Development',
      description: 'Membangun dan mengoptimalkan situs web responsif yang fungsional',
    },
    {
      icon: faPenNib,
      title: 'UI/UX Design',
      description: 'Merancang antarmuka dan pengalaman pengguna yang intuitif.',
    },
    {
      icon: faFolderOpen,
      title: 'Document Preparation',
      description: 'Menyusun laporan dan dokumen profesional.',
    },
  ];

  return (
    <StyledService>
      <Title title="Service" subtitle="What I Do" />
      <ContainerComponent>
        <section className="content">
          <div className="card-service row justify-content-center">
            {services.map((service, index) => (
              <div className="card-service-item col-12 col-md-5 col-lg-4" key={index}>
                <section className="icon">
                  <FontAwesomeIcon icon={service.icon} />
                </section>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="card-client row">
            <div className="card-client-item col-12 col-lg-4">
              <h2>13+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="card-client-item col-12 col-lg-4">
              <h2>90+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="card-client-item col-12 col-lg-4">
              <h2>100+</h2>
              <p>Clients Worldwide</p>
            </div>
          </div>
        </section>
      </ContainerComponent>
    </StyledService>
  );
};

export default Service;
