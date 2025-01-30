import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .modal-dialog {
    z-index: 9999;
  }
`;

const StyledModalHeader = styled(Modal.Header)`
  background-color: var(--color-card);
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--color-normal);
    &:hover {
      color: var(--primary-color);
    }
  }

  .modal-title {
    color: var(--color-normal);
  }
`;

const StyledModalBody = styled(Modal.Body)`
padding : 0;
  .image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image img {
    width: 100%;
  }
`;

const Modals = ({ lgShow, setLgShow, title, img }) => {
  return (
    <StyledModal show={lgShow} size="lg" onHide={() => setLgShow(false)} aria-labelledby="example-custom-modal-styling-title">
      <StyledModalHeader>
        <Modal.Title id="example-custom-modal-styling-title">{title}</Modal.Title>
        <span onClick={() => setLgShow(false)}>
          <FontAwesomeIcon icon={faX} />
        </span>
      </StyledModalHeader>
      <StyledModalBody>
        <div className="image">
          <img src={img} alt="" />
        </div>
      </StyledModalBody>
    </StyledModal>
  );
};

export default Modals;
