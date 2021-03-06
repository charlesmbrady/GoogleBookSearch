import React, { useState, useEffect } from "react";
import useDebounce from "../../../utils/debounceHook";
import { FaRegBookmark, FaSpinner } from "react-icons/fa";

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

function Home({ notify }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [book, setBook] = useState(null);
  const [bookModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [savedBooks, setSavedBooks] = useState([]);

  const debouncedSearchCount = useDebounce(count, 500);

  useEffect(() => {
    googleAPI.getBooks().then(savedBooks => {
      setSavedBooks(savedBooks.data);
    });
    if (count !== 0) {
      setIsLoading(true);
      googleAPI.searchTitles(query).then(res => {
        if (res.data.items === undefined) {
          setIsLoading(false);
          return 0;
        }
        //for each book in res.data.items, grab the respective fields and store them as a book
        //also filter books that don't have all the fields
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
        setIsLoading(false);
      });
    }
  }, [debouncedSearchCount]);

  const search = query => {
    setQuery(query);
    setCount(count + 1);
  };

  const saveBook = book => {
    var found = false;
    for (var i = 0; i < savedBooks.length; i++) {
      if (savedBooks[i].infoLink == book.infoLink) {
        found = true;
        break;
      }
    }
    if (found === true) {
      notify("error", `You already saved that book "${book.title}"`);
      return 0;
    }
    googleAPI.saveBook(book).then(bookResponse => {
      if (bookResponse.status === 200) {
        notify("success", `Saved "${book.title}"!`);
        setCount(count + 1);
      }
    });
  };

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
            <Link className="my-nav-link" to="/saved">
              View Saved Books
            </Link>
          </Col>
        </Row>
        <Row className="title">
          <Col>Google Books Search</Col>
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
                  onClick={() => saveBook(book)}
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
        />
      )}
    </div>
  );
}

export default Home;
