import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

function Home(props){
    return (
        <Container>
            <br></br>
            <Row>
                <Col>
                    <h1>Welcome to the GoogleBooks App</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Use the Navbar at the top to search the Google Books store and view saved books</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;