import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Book.css';
import SaveBtn from '../save-btn/save-btn';

function Book(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <a href={props.infoLink}><h6>{props.title}</h6></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={props.image}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{props.authors}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <SaveBtn></SaveBtn>
                        </Col>
                    </Row>
                </Col>
                <Col className="description">
                    <p>{props.description}</p>
                </Col>

            </Row>


        </Container>
    );
}

export default Book;