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

const Modals = ({ lgShow, setLgShow, title }) => {
  return (
    <StyledModal show={lgShow} size="lg" onHide={() => setLgShow(false)} aria-labelledby="example-custom-modal-styling-title">
      <StyledModalHeader>
        <Modal.Title id="example-custom-modal-styling-title">{title}</Modal.Title>
        <span onClick={() => setLgShow(false)}>
          <FontAwesomeIcon icon={faX} />
        </span>
      </StyledModalHeader>
      <Modal.Body>
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis
          doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!
        </p>
      </Modal.Body>
    </StyledModal>
  );
};

export default Modals;
