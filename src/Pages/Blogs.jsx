import React, { Suspense } from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import senja from '../assets/blogs/senja.jpg';
import cofee from '../assets/blogs/cofee.jpg';
import coding from '../assets/blogs/coding.jpg';
// import CardBlog from '../components/Card/CardBlog';
import Button from '../components/Button/Button';

const CardBlog = React.lazy(() => import('../components/Card/CardBlog'));

const StyledBlogs = styled.div`
  padding-top: 5rem;

  .content {
    margin-top: 0.5rem;
  }

  @media (max-width: 991px) {
    .content {
      padding: 0 1rem 0 1rem;
    }
  }
  @media (max-width: 576px) {
    .content {
      padding: 0 0.5rem 0 0.5rem;
    }
  }
`;

const Blogs = () => {
  const dataBlogs = [
    {
      id: 1,
      title: 'Senja adalah hadiah semata',
      img: senja,
      date: '21 Januari 2023',
      deskripsi: 'Senja mengajarkan kita bahwa keindahan selalu hadir, bahkan di penghujung hari. Tak perlu terburu-buru, nikmati tiap detiknya.',
    },
    {
      id: 2,
      title: 'Menikmati Kopi dengan gaya yang berbeda',
      img: cofee,
      date: '10 November 2023',
      deskripsi: 'Kopi bukan sekadar minuman, tapi cerita di setiap tegukan. Kadang pahit, kadang manis, tapi selalu meninggalkan kesan.',
    },
    {
      id: 3,
      title: 'Sang Programer',
      img: coding,
      date: '16 Agustus 2023',
      deskripsi: 'Menjadi programmer bukan hanya soal menulis kode, tapi juga tentang memecahkan masalah, berpikir kreatif, dan terus belajar tanpa batas.',
    },
  ];

  const dataTerbaru = dataBlogs.slice(0, 3);
  return (
    <StyledBlogs id="blogs">
      <Title title="Blogs" subtitle="My Blogs" />
      <ContainerComponent>
        <section className="content">
          <section className="row justify-content-center">
            <Suspense fallback={<div>Loading...</div>}>
              {dataTerbaru.map((data, index) => (
                <CardBlog key={index} {...data} className="sm-col-12 col-md-6 col-lg-4 mb-2 " />
              ))}
            </Suspense>
          </section>
          <div className="button d-flex justify-content-center">
            <Button Regular={true} text="View All Blogs" />
          </div>
        </section>
      </ContainerComponent>
    </StyledBlogs>
  );
};

export default Blogs;
