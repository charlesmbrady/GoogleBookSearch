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
import googleAPI from "../../../utils/googleAPI";

function Home() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (count !== 0) {
      googleAPI.searchTitles(query).then(res => {
        console.log("here are search resultts" + res);
      });
    }
  }, [count]);

  const search = query => {
    setQuery(query);
    setCount(count + 1);
  };

  return (
    <div>
      <Container>
        <Row className="row justify-content-end">
          <Col className="col-md-auto col-sm-6">View Saved Books</Col>
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
        <Row>
          <Col className="col-sm-3">
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
