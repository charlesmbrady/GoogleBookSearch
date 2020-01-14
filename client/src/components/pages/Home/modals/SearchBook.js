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
      <ModalHeader toggle={() => toggle()}>
        {book.title} <br></br>{" "}
        <span className="authors">
          {book.authors.map((author, i) => (
            <span>{i !== 0 ? ` | ${author}` : `${author}`}</span>
          ))}
        </span>
      </ModalHeader>
      <ModalBody>
        <h5 className="field">Description</h5>
        <p>{book.description}</p>
      </ModalBody>
      <ModalFooter>
        <a href={book.infoLink} target="_blank">
          <Button color="warning" onClick={() => saveBook(book)}>
            Open In Store
          </Button>
        </a>{" "}
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
