import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col
} from 'reactstrap';
import './Saved.css';
import React, { useEffect, useState } from 'react';
import utils from '../../../utils/googleAPI';

function Saved() {


    const [savedBooks, setSavedBooks] = useState([]);

    const removeBook = (id, i) => {
        //remove the book from the database
        utils.removeBook(id);
        //remove the book immediately from the screen
        const temp = savedBooks.slice();
        temp.splice(i, 1);
        setSavedBooks(temp);
    }

    useEffect(() => {
        utils.getBooks().then(res => {
            setSavedBooks(res.data);
        })
    }, [])

    useEffect(() => {
        
    }, [savedBooks]);


    return (
        <Container>
            <Row>
                <Col>
                    <div className="saved-books">
                        {
                            savedBooks.map((book, i) => (
                                <Card className="saved-book" key={i}>
                                    <CardHeader>{book.title}</CardHeader>
                                    <CardBody>
                                        <CardTitle>{book.authors}</CardTitle>
                                        <CardText>{book.description}</CardText>
                                        <a href={book.infoLink} target="_blank"><Button>Info</Button></a>
                                    </CardBody>
                                    <CardFooter><button onClick={() => removeBook(book._id, i)}>-</button></CardFooter>
                                </Card>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;