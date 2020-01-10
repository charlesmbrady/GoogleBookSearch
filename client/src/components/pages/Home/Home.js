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
  Col
} from "reactstrap";
import googleAPI from "../../../utils/googleAPI";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>Saved</Col>
        </Row>
        <Row className="row justify-content-md-center">
          <Col className="col-md-6 col-sm">
            <InputGroup className="input-group">
              <Input
                className="input"
                placeholder="Search the GoogleBooks API by title/keyword"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>books here</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
