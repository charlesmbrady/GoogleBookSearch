import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="title">Google Books Search</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="title">Search the Google Books store and view saved books</h4>
                </Col>
            </Row>
            <Row className="nav-buttons">
                <Col>

                    <Link to="/search" className="nav-button">Search</Link>
                </Col>
                <Col>
                    <Link to="/saved" className="nav-button">Saved</Link>
                </Col>

            </Row>
        </Container>
    );
}

export default Home;