import React from 'react';
import styled from 'styled-components';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import Title from '../components/Title/Title';
import CardResume from '../components/Card/CardResume';
const StyledResume = styled.div`
  padding-top: 5rem;
  position: relative;
  z-index: 2;

  /* content */
  .content {
    margin-top: 0.5rem;
    gap: 2rem;
  }

  .resume-education h2,
  .resume-experiance h2 {
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 992px) {
    .content {
      padding: 0 1rem 0 1rem;
    }
  }
  @media (max-width: 576px) {
    .content {
      gap: 3rem;
      padding: 0 1rem 0 1rem;
    }
  }
`;

const Resume = () => {
  const dataresume = [
    {
      id: 1,
      kategori: 'Education',
      title: 'Design Grafis',
      subtitle: 'Multimedia School / 2018 - 2021',
      content: 'Selama tiga tahun di Multimedia School, saya mempelajari penggunaan software desain seperti Adobe Photoshop dan Illustrator, ',
    },
    {
      id: 2,
      kategori: 'Education',
      title: 'Software Engineer',
      subtitle: 'Nurul Fikri Integrated Technology College / 2021 - 2025',
      content: 'Di Nurul Fikri, saya belajar pemrograman dan rekayasa perangkat lunak, termasuk Java, Python, dan JavaScript. Saya juga berpartisipasi dalam proyek tim ',
    },
    {
      id: 3,
      kategori: 'Education',
      title: 'Web Development',
      subtitle: 'Infinite Learning / 2023',
      content: 'Saya mempelajari pengembangan web dengan HTML, CSS, JavaScript, dan React.js, serta dasar-dasar backend dengan Node.js.',
    },

    { id: 4, kategori: 'Experience', title: 'Freelancer', subtitle: 'Frontend Developer / 2022', content: 'Merancang antarmuka pengguna dan membangun website untuk Yayasan Awwaliyah dengan fokus pada pengalaman pengguna yang responsif.' },
    {
      id: 5,
      kategori: 'Experience',
      title: 'Administrative',
      subtitle: 'Staf Administrasi Perpustakaan / 2018',
      content: 'Mengelola dan mengidentifikasi buku-buku baru, memastikan semua koleksi terdaftar dalam sistem perpustakaan dengan akurasi tinggi.',
    },
    { id: 6, kategori: 'Experience', title: 'Backend Developer', subtitle: 'PT Teknologi Cipta Solusi / 2019', content: 'Mengembangkan dan memelihara sistem backend, meningkatkan kinerja dan keamanan aplikasi untuk PT Cipta Solusi.' },
  ];

  const education = dataresume.filter((item) => item.kategori === 'Education');
  const experiance = dataresume.filter((item) => item.kategori === 'Experience');

  return (
    <StyledResume>
      <Title title="Resume" subtitle="My Resume" />
      <ContainerComponent>
        <section className="content row ">
          <div className="resume-education col">
            <h2>Education</h2>
            <section className="resume-education-item d-flex flex-column">
              {education.map((item, index) => (
                <CardResume key={index} title={item.title} subtitle={item.subtitle} content={item.content} />
              ))}
            </section>
          </div>
          <div className="resume-experiance col">
            <h2>Experiance</h2>
            <section className="resume-experiance-item d-flex flex-column">
              {experiance.map((item, index) => (
                <CardResume key={index} title={item.title} subtitle={item.subtitle} content={item.content} />
              ))}
            </section>
          </div>
        </section>
      </ContainerComponent>
    </StyledResume>
  );
};

export default Resume;
