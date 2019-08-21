import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

<<<<<<< HEAD
function Home() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState();
    const [savedBooks, setSavedBooks] = useState();


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <input id="search-input" placeholder="Type search term here"></input>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>

            </Container>
        </div>
=======
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
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
    );
}

export default Home;