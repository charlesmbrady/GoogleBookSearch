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
import googleAPI from "../../../../utils/googleAPI";

export default function SearchBook({ isOpen, toggle, book }) {
  const saveBook = book => {
    googleAPI.saveBook(book).then(bookResponse => {
      if (bookResponse.status === 200) {
        toggle();
      }
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={() => toggle()}>
      <ModalHeader toggle={() => toggle()}>Edit Todo</ModalHeader>
      <ModalBody>
        Hello book
        <div>{JSON.stringify(book)}</div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => saveBook(book)}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={() => toggle()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
