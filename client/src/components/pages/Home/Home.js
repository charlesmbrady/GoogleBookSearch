import React, { useState, useEffect } from "react";
import useDebounce from "../../../utils/debounceHook";
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

function Home() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (count !== 0) {
      googleAPI.searchTitles(query).then(res => {
        //for each book in res.data.items, grab the respective fields and store them as a book
        //also filter books that don't have all the fields?
        setSearchResults(res.data.items);
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
            <Link to="/saved">View Saved Books</Link>
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
                <CardImg
                  className="book-image"
                  top
                  width="100%"
                  src={
                    book.volumeInfo.imageLinks !== undefined
                      ? book.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  alt="Card image cap"
                />
                {/* <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody> */}
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
