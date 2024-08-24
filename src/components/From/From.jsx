import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
const StyledFrom = styled.div`
  /* Form */

  .form-control {
    background-color: var(--color-card);
    border: none;
    position: relative; /* Pastikan ini ada */
    padding: 0.5rem 1rem; /* Padding yang benar */
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-text-navbar);
  }
  .form-control::placeholder {
    color: var(--color-text-navbar); /* Ganti dengan warna yang diinginkan */
    font-size: 14px;
  }

  .form-control:focus {
    background-color: #444;
    border-color: #00adb5;
    color: #fff;
  }

  .button {
    padding: 0.5rem 1.8rem;
    cursor: pointer;
  }
`;

const From = ({ className }) => {
  return (
    <StyledFrom className={className}>
      <div className="contact-form">
        <div className="title mb-3">
          <h3>Message Me</h3>
        </div>
        <form>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Name" required />
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
          </div>
          <div className="mb-3">
            <input className="form-control" placeholder="Subject" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <Button text="Send Message" className="button" />
        </form>
      </div>
    </StyledFrom>
  );
};

export default From;
