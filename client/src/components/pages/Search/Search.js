
import { Container, Row, Col } from 'reactstrap';
import './Search.css';
import '../../../utils/googleAPI';
import googleAPI from '../../../utils/googleAPI';
import React, { useState, useEffect } from 'react'
import Book from '../../book/Book';

function Search(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        googleAPI.search(searchTerm)
            .then((res) => {
                console.log(res.data.items);
                setSearchResults(res.data.items);
                searchResults.map(book => (
                    <li key={book.id}>
                        {/* title = {book.volumeInfo.title} */}
                    </li>

                ))
            })
    }, [searchTerm]);


    return (
        <div>
            <Container>
                <Row>
                    <Col>Search</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <input onChange={(event) => setSearchTerm(event.target.value)}></input>

                    </Col>
                </Row>
            </Container>
            <Container>
                <h2>Search results</h2>
            </Container>
            <Container>
                {searchResults.map(book => (
                    <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    />

                ))}
            </Container>
        </div>
    );
}

export default Search;