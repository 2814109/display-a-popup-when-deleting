import { VFC, useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
const DeleteButton: VFC = () => {
  const [show, setShow] = useState<boolean>(false);
  const onClick = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="danger" onClick={onClick}>
        delete
      </Button>

      <ModalComponent show={show} setShow={setShow} />
    </>
  );
};

export default DeleteButton;
