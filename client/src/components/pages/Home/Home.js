import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

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
    );
}

export default Home;