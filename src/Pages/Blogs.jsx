import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import ContainerComponent from '../components/ContainerComponent/ContainerComponent';
import Gambar from '../assets/about/rafiq.jpeg';
import CardBlog from '../components/Card/CardBlog';
import Button from '../components/Button/Button';

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
      img: Gambar,
      date: '21 Januari 2023',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 2,
      title: 'Menikmati Kopi dengan gaya yang berbeda',
      img: Gambar,
      date: '10 November 2023',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 3,
      title: 'Bulan dan Tanggal si Anu ulang tahunnya',
      img: Gambar,
      date: '16 Agustus 2023',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
    {
      id: 4,
      title: 'Bulan dan Tanggal si Anu ulang tahunnya',
      img: Gambar,
      date: '16 Agustus 2023',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    },
  ];

  const dataTerbaru = dataBlogs.slice(0, 3);
  return (
    <StyledBlogs>
      <Title title="Blogs" subtitle="My Blogs" />
      <ContainerComponent>
        <section className="content">
          <section className="row justify-content-center">
            {dataTerbaru.map((data, index) => (
              <CardBlog key={index} {...data} className="sm-col-12 col-md-6 col-lg-4 mb-2 " />
            ))}
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
