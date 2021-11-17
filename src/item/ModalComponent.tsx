import { VFC } from "react";
import { Button, Modal } from "react-bootstrap";

type ModalProps = {
  show: boolean;
  setShow: Function;
};
const ModalComponent: VFC<ModalProps> = ({ show, setShow }) => {
  const onCloseClick = () => {
    setShow(false);
  };
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Attention</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to delete it?</p>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={onCloseClick}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onCloseClick}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
