import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Saved.css';
import Books from '../../Books/Books';

function Saved(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>View Saved Books below!</h1>
                    </Col>
                </Row>
            </Container>
            <Books />
        </div>
    );
}

export default Saved;