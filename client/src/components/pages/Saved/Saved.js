import { FaTrashAlt, FaSpinner } from "react-icons/fa";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  InputGroup,
  Input,
  CardText,
  Container,
  Row,
  Col,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Saved.css";
import React, { useEffect, useState } from "react";
import utils from "../../../utils/googleAPI";
import BookModal from "../Home/modals/SearchBook";
function Saved({ notify }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [savedBooks, setSavedBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [bookModal] = useState(true); //not sure why but this works when true instead of false (opposite of what you'd think)

  useEffect(() => {
    utils.getBooks().then(savedBooks => {
      setSavedBooks(savedBooks.data);
      setIsLoading(false);
    });
  }, [count]);

  return (
    <div>
      {isLoading && (
        <div className="loading-mask">
          <FaSpinner className="loading-spinner"></FaSpinner>
        </div>
      )}
      <Container className="container-fluid">
        <Row className="row my-nav justify-content-end">
          <Col className="col-md-auto col-sm-6">
            <Link className="my-nav-link" to="/">
              Search
            </Link>
          </Col>
        </Row>
        <Row className="title">
          <Col>Saved Books</Col>
        </Row>
        <Row className="row books-wrapper">
          {savedBooks.map((book, i) => (
            <div className="col-md-3 col-sm-6 col-xs-12 book">
              <Card>
                <FaTrashAlt
                  className="trash-icon"
                  onClick={() => console.log("delete book code here")}
                />
                <CardImg
                  className="book-image"
                  top
                  width="100%"
                  src={book.thumbnail}
                  alt="Card image cap"
                  onClick={() => setBook(book)}
                />
              </Card>
            </div>
          ))}
        </Row>
      </Container>
      {book !== null && (
        <BookModal
          isOpen={bookModal}
          book={book}
          toggle={() => setBook(null)}
          savedBooks={savedBooks}
          setCount={setCount}
          count={count}
          notify={notify}
          saved={true}
        />
      )}
    </div>
  );
}

export default Saved;
