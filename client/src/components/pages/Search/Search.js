import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Search.css';
import '../../../utils/googleAPI';
import googleAPI from '../../../utils/googleAPI';
import React, { useState, useEffect } from 'react';
import SearchBook from '../../SearchBook/SearchBook';


function Search(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {

        googleAPI.getBooks().then(res => {
            console.log(res.data);
            setSavedBooks(res.data);
        })

        if (searchTerm !== undefined) {
            googleAPI.search(searchTerm)
                .then((res) => {
                    console.log(res.data.items);
                    const newResults = [];
                    res.data.items.forEach(book => {
                        savedBooks.forEach(saved => {

                            if (saved.infoLink === book.volumeInfo.infoLink) {
                                console.log("this one " + saved.title)
                                return 0;
                            }

                            else if (book.volumeInfo.title && book.volumeInfo.imageLinks && book.volumeInfo.authors && book.volumeInfo.infoLink && book.volumeInfo.description) {
                                // newResults.push(book.volumeInfo);
                                let newBook = {
                                    title: book.volumeInfo.title,
                                    authors: book.volumeInfo.authors,
                                    description: book.volumeInfo.description,
                                    infoLink: book.volumeInfo.infoLink,
                                    thumbnail: book.volumeInfo.imageLinks.smallThumbnail
                                }
                                newResults.push(newBook);
                            }
                            else {
                                return 0;
                            }

                        });


                    })
                    
                    setSearchResults(newResults);
                })
        }

    }, [searchTerm]);


    return (
        <Container className="search">
            <Row className="justify-content-end other-nav">
                <Col className="col-md-2">
                    <Link to="/saved" className="nav-button other">View Saved Books</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="title other-page">Search</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input onChange={(event) => setSearchTerm(event.target.value)}></input>
                </Col>
            </Row>
            {
                searchResults.map((book, i) => (
                    <SearchBook
                        key={i}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                        title={book.title}
                        description={book.description}
                        authors={book.authors}
                        infoLink={book.infoLink}
                        thumbnail={book.thumbnail}
                    />
                ))
            }
        </Container>
    );
}

export default Search;