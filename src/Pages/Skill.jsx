import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import { ProgressBar } from 'react-bootstrap';
import Html from '../assets/skills/html.svg';
import Css from '../assets/skills/css.svg';
import Js from '../assets/skills/js.svg';
import Php from '../assets/skills/php.svg';
import Mysql from '../assets/skills/mysql.svg';
import Bootstrap from '../assets/skills/bootstrap.svg';
import Tailwind from '../assets/skills/tailwindcss.svg';
import Reactjs from '../assets/skills/react.svg';
import Nodejs from '../assets/skills/nodejs.svg';
import SkillsCrousel from '../components/Crousel/SkillsCrousel';

const StyledSkill = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
  }

  .label {
    color: var(--color-text-navbar);
    margin-bottom: 0.3rem;
  }
  .label h3 {
    font-size: 15px;
  }
  .label p {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 576px) {
    .content {
      flex-wrap: wrap;
    }
  }
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 10px; /* Contoh mengubah tinggi */
  background-color: var(--color-hero); /* Warna background */
  border-radius: 0;

  .progress-bar {
    background-color: var(--primary-color); /* Warna progress bar */
    font-weight: bold;
    text-align: center;
    color: #fff;
    border-radius: 0;
  }
`;

const Skill = () => {
  const dataskills = [
    { id: 1, kategori: 'bahasa', img: Html, img1: Css, title: 'HTML / CSS', persen: 95 },
    { id: 2, kategori: 'bahasa', img: Js, title: 'JavaScript', persen: 85 },
    { id: 3, kategori: 'bahasa', img: Php, title: 'PHP', persen: 80 },
    { id: 4, kategori: 'bahasa', img: Mysql, title: 'MySQL', persen: 75 },
    { id: 5, kategori: 'framework', img: Bootstrap, title: 'Bootstrap', persen: 85 },
    { id: 6, kategori: 'framework', img: Tailwind, title: 'Tailwind CSS', persen: 70 },
    { id: 7, kategori: 'framework', img: Reactjs, title: 'React.js', persen: 85 },
    { id: 8, kategori: 'framework', img: Nodejs, title: 'Node.js', persen: 75 },
  ];

  const dataBahasa = dataskills.filter((data) => data.kategori === 'bahasa');
  const dataFramework = dataskills.filter((data) => data.kategori === 'framework');

  // cara menyatukan data html dan css

  return (
    <StyledSkill>
      <Title title="Skills" subtitle="My Skills" />
      <ContainerComponent>
        <section className="content row  gap-4 justify-content-between justify-content-md-center">
          <section className="col-12 col-md-5 col-lg-6 ">
            {dataBahasa.map((data, index) => (
              <section className="bahasa mb-4" key={index}>
                <div className="label d-flex justify-content-between align-items-center">
                  <h3>{data.title}</h3>
                  <p>{data.persen}%</p>
                </div>
                <StyledProgressBar now={data.persen} />
              </section>
            ))}
          </section>
          <section className="col-12 col-md-5 col-lg-6 ">
            {dataFramework.map((data, index) => (
              <section className="framework mb-4" key={index}>
                <div className="label  d-flex justify-content-between align-items-center">
                  <h3>{data.title}</h3>
                  <p>{data.persen}%</p>
                </div>
                <StyledProgressBar now={data.persen} />
              </section>
            ))}
          </section>
        </section>
        <SkillsCrousel />
      </ContainerComponent>
    </StyledSkill>
  );
};

export default Skill;
