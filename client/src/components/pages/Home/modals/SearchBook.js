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

export default function SearchBook({
  isOpen,
  toggle,
  book,
  savedBooks,
  count,
  setCount,
  saved,
  notify
}) {
  const saveBook = book => {
    var found = false;
    for (var i = 0; i < savedBooks.length; i++) {
      if (savedBooks[i].infoLink == book.infoLink) {
        found = true;
        break;
      }
    }
    if (found === true) {
      notify("error", `You already saved that book ${book.title}`);
      return 0;
    }

    googleAPI.saveBook(book).then(bookResponse => {
      if (bookResponse.status === 200) {
        notify("success", `You saved "${book.title}"`);
        setCount(count + 1);
        toggle();
      }
    });
  };

  const removeBook = book => {
    googleAPI.removeBook(book._id).then(bookResponse => {
      if (bookResponse.status === 200) {
        notify("success", `Removed "${book.title}"!`);
        setCount(count + 1);
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
          <Button color="warning">Open In Store</Button>
        </a>{" "}
        {!saved && (
          <Button color="primary" onClick={() => saveBook(book)}>
            Save
          </Button>
        )}{" "}
        {saved && (
          <Button color="primary" onClick={() => removeBook(book)}>
            Remove
          </Button>
        )}
        <Button color="secondary" onClick={() => toggle()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
