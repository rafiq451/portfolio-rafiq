import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CutText from '../../utils/Fungsi/CutText';
import { Skeleton } from 'primereact/skeleton';

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
    object-fit: cover;
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log('Component is visible'); // Debugging
            setIsVisible(true);
            observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <StyledCardBlog className={className} ref={cardRef}>
      <div className="card-blog">
        {/* Skeleton untuk gambar */}
        {!imageLoaded && isVisible && <Skeleton width="100%" height="250px" />}

        {isVisible && (
          <section className="image-blog" style={{ display: imageLoaded ? 'block' : 'none' }}>
            <picture>
              <img
                src={`${img}?${new Date().getTime()}`}
                alt="Gambar Blog"
                onLoad={() => {
                  // console.log('Image loaded'); // Debugging
                  setImageLoaded(true);
                }}
              />
            </picture>
            <div className="date-label fw-medium">{date}</div>
          </section>
        )}

        {/* Skeleton untuk Judul */}
        {!imageLoaded && isVisible && <Skeleton width="90%" height="1.2rem" className="my-2" />}

        {isVisible && imageLoaded && (
          <section className="title-blog">
            <h3 className="fw-semibold">{title}</h3>
          </section>
        )}

        {/* Skeleton untuk Deskripsi */}
        {!imageLoaded && isVisible && (
          <div>
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} width="100%" height=".5rem" className="my-2" />
            ))}
          </div>
        )}

        {isVisible && imageLoaded && (
          <section className="description-blog">
            <article>
              <p>
                {CutText(deskripsi, 100)} ”<span>[Baca Selengkapnya]</span>
              </p>
            </article>
          </section>
        )}
      </div>
    </StyledCardBlog>
  );
};

export default CardBlog;
