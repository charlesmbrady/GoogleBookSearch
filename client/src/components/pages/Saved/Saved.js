import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";
import "./Saved.css";
import React, { useEffect, useState } from "react";
import utils from "../../../utils/googleAPI";
function Saved({ notify }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    utils.getBooks().then(savedBooks => {
      setSavedBooks(savedBooks.data);
      setIsLoading(false);
    });
  }, [count]);

  return (
    <div>
      <Container>
        <Row>
          <Col>Nav here</Col>
        </Row>
        <Row>
          <Col>input here</Col>
        </Row>
        <Row>
          <Col>books here</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
