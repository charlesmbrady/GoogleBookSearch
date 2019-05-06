import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function NavBar() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/home">Home</Link>
                    </Col>
                    <Col>
                        <Link to="/search">Search</Link>
                    </Col>
                    <Col>
                        <Link to="/saved">Saved</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default NavBar;