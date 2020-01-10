import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default function SearchBook({ isOpen, toggle, book }) {
  return (
    <Modal isOpen={isOpen} toggle={() => toggle()}>
      <ModalHeader toggle={() => toggle()}>Edit Todo</ModalHeader>
      <ModalBody>
        Hello book
        <div>{JSON.stringify(book)}</div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => console.log("need to add book")}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={() => toggle()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
