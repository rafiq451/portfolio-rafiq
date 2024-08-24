import React from 'react';
import styled from 'styled-components';
import CutText from '../../utils/Fungsi/CutText';
const StyledCardBlog = styled.div`
  .card-blog {
    margin-bottom: 1rem;
  }

  .image-blog {
    position: relative;
    margin-bottom: 1rem;
    overflow: hidden;
    max-width: 100%;
    height: 250px;
  }

  .image-blog picture img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Memastikan gambar sesuai dengan ukuran kontainer */
  }

  .date-label {
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--primary-color);
    color: var(--color-normal);
    padding: 0.5rem 1rem;
    border-radius: 0 0.5rem 0 0;
    font-size: 1rem;
  }

  .title-blog h3 {
    color: var(--color-normal);
    font-size: 16px;
  }
  .description-blog p {
    color: var(--color-text-navbar);
    font-size: 14px;
    line-height: 1.5rem;
  }

  .description-blog article span {
    font-weight: 700;
    color: var(--primary-color);
    cursor: pointer;
  }

  @media (max-width: 991px) {
    .image-blog {
      height: 150px;
    }
  }
  @media (max-width: 576px) {
    .image-blog {
      height: 200px;
    }
  }
`;
const CardBlog = ({ title, img, date, deskripsi, className }) => {
  return (
    <StyledCardBlog className={className}>
      <div className="card-blog">
        <section className="image-blog">
          <picture>
            <source />
            <img src={img} alt="Gambar Blog" />
          </picture>
          <div className="date-label fw-medium">{date}</div>
        </section>
        <section className="title-blog">
          <h3 className="fw-semibold">{title}</h3>
        </section>
        <section className="description-blog">
          <article>
            <p>
              {CutText(deskripsi, 100)} ”<span>[Baca Selengkapnya]</span>
            </p>
          </article>
        </section>
      </div>
    </StyledCardBlog>
  );
};

export default CardBlog;
