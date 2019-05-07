import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import utils from '../../utils/googleAPI';


import './Book.css';

function Book(props) {
    const { title, authors, link, description } = props;

    let book = {
        title, authors, link, description
    }

    function submitBook(book) {
        //post book to database
        utils.saveBook(book);
    }

    return (
        <Container className="book">
            <Row>
                <Col className="col-md-4">
                    <h3>{props.title}</h3>
                    <h6>Written by: {props.authors}</h6>

                </Col>
                <Col className="col-md-3">
                    <a href={props.link} target="_blank">View</a>
        
                    <button onClick={submitBook({book})}>Save</button>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-3"> <img src="https://via.placeholder.com/150"></img> </Col>
                <Col> Description: {props.description} </Col>
            </Row>
        </Container>
    );
};

export default Book;