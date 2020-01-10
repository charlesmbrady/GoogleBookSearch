import React, { useState, useEffect } from "react";
import useDebounce from "../../../utils/debounceHook";
import { FaRegBookmark } from "react-icons/fa";
import "./Home.css";
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
import googleAPI from "../../../utils/googleAPI";
import BookModal from "./modals/SearchBook";

function Home() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [book, setBook] = useState(null);
  const [bookModal] = useState(true);

  useEffect(() => {
    if (count !== 0) {
      googleAPI.searchTitles(query).then(res => {
        //for each book in res.data.items, grab the respective fields and store them as a book
        //also filter books that don't have all the fields?

        //must have title, authors, description, infoLink, thumbnail
        const filteredBooks = res.data.items
          .filter(book => {
            if (
              book.volumeInfo !== undefined &&
              book.volumeInfo.title !== undefined &&
              book.volumeInfo.authors !== undefined &&
              book.volumeInfo.description !== undefined &&
              book.volumeInfo.imageLinks !== undefined &&
              book.volumeInfo.imageLinks.smallThumbnail !== undefined &&
              book.volumeInfo.infoLink !== undefined
            ) {
              return book;
            }
          })
          .map(book => {
            const newBook = {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
              infoLink: book.volumeInfo.infoLink
            };
            return newBook;
          });
        setSearchResults(filteredBooks);
      });
    }
  }, [count]);

  const search = query => {
    setQuery(query);
    setCount(count + 1);
  };

  return (
    <div>
      <Container className="container-fluid">
        <Row className="row my-nav justify-content-end">
          <Col className="col-md-auto col-sm-6">
            <Link className="my-nav-link" to="/saved">
              View Saved Books
            </Link>
          </Col>
        </Row>
        <Row className="row justify-content-md-center">
          <Col className="col-md-6 col-sm">
            <InputGroup className="input-group">
              <Input
                className="input"
                name="query"
                onChange={e => search(e.target.value)}
                placeholder="Search the GoogleBooks API by title/keyword"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="row books-wrapper">
          {searchResults.map((book, i) => (
            <div className="col-md-3 col-sm-6 col-xs-12 book">
              <Card>
                <FaRegBookmark
                  className="save-icon"
                  onClick={() => console.log("save image code here")}
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
        />
      )}
    </div>
  );
}

export default Home;
