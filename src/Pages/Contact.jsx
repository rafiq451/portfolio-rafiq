import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import From from '../components/From/From';

const StyledContact = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  .content {
    margin-top: 0.5rem;
  }

  .title h3 {
    font-size: 20px;
    font-weight: 500;

    color: var(--color-normal);
  }

  /* contact-info */
  .contact-info {
    padding: 0 1.5rem 0 1.5rem;
  }
  .contact-info .deskripsi {
    color: var(--color-text-navbar);
    font-size: 15px;
  }

  .info-icon {
    position: relative;
  }
  .info-icon::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: var(--color-text-navbar);
    position: absolute;
    top: 0;
    right: 0;
  }
  .info-icon .icon svg {
    font-size: 38px;
    color: var(--primary-color);
  }

  .info-text .text h4 {
    font-size: 15px;
    font-weight: 500;
    color: var(--color-normal);
  }
  .info-text .text p {
    font-size: 15px;
    font-weight: 300;
    color: var(--color-text-navbar);
  }
  @media (max-width: 991px) {
    .content {
      padding: 0 1rem 0 1rem;
    }
    .contact-info {
      margin-top: 2rem;
      padding: 0;
    }
    .info-icon {
      padding: 0 1rem 0 5px;
    }
  }

  @media (max-width: 576px) {
    .content {
      padding: 0 0.5rem 0 0.5rem;
    }
    .contact-info {
      margin-top: 2rem;
      padding: 0;
    }
    .info-icon {
      padding: 0 1rem 0 5px;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <Title title="Contact" subtitle="Get in touch" />
      <ContainerComponent>
        <section className="content">
          <section className="row  ">
            <From className="col-12 col-md-6" />
            <div className="col-12 col-md-11 col-lg-6 ">
              <div className="contact-info ">
                <div className="title mb-3">
                  <h3>Info Me</h3>
                </div>
                <section>
                  <div className="deskripsi">
                    <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                  </div>
                  <section className="row d-flex gap-3 p-2">
                    <div className="info-icon d-flex  align-items-center flex-column gap-3  col-2">
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faUser} />
                        </i>
                      </div>
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faMapLocationDot} />
                        </i>
                      </div>
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faPhone} />
                        </i>
                      </div>
                      <div className="icon">
                        <i>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                      </div>
                    </div>
                    <div className="info-text col">
                      <div className="text mb-3">
                        <h4 className=" m-0 ">Name</h4>
                        <p className=" m-0">Muhammad Rafiq</p>
                      </div>
                      <div className="text mb-3">
                        <h4 className=" m-0 ">Location</h4>
                        <p className=" m-0">Purasari, Kec Leuwiliang, Bogor</p>
                      </div>
                      <div className="text mb-3">
                        <h4 className=" m-0 ">Call Me</h4>
                        <p className=" m-0">+62 882-9124-2899</p>
                      </div>
                      <div className="text mb-3">
                        <h4 className=" m-0 ">Email Me</h4>
                        <p className=" m-0">ibab7810@gmail.com</p>
                      </div>
                    </div>
                  </section>
                </section>
              </div>
            </div>
          </section>
        </section>
      </ContainerComponent>
    </StyledContact>
  );
};

export default Contact;
