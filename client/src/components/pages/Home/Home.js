import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useDebounce from "../../../utils/debounceHook";
import './Home.css';
import googleAPI from '../../../utils/googleAPI';
import SearchResults from '../../SearchResults/SearchResults';

function Home() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);
    // const [savedBooks, setSavedBooks] = useState();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        //TODO: filter saved books out of search results
        if (!searchTerm) {
            return;
        }
        if (debouncedSearchTerm) {
            googleAPI.searchTitles(debouncedSearchTerm).then(response => {
                const books = [];
                response.data.items.forEach(bookdata => {
                    const book = {
                        title: bookdata.volumeInfo.title,
                        authors: bookdata.volumeInfo.authors || 'No authors listed',
                        description: bookdata.volumeInfo.description || 'No Description Available',
                        infoLink: bookdata.volumeInfo.infoLink,
                        thumbnailLink: bookdata.volumeInfo.imageLinks.thumbnail || 'No thumbnail available',
                        smallThumbnailLink: bookdata.volumeInfo.imageLinks.smallThumbnail || 'No small thumbnail available'
                    }
                    books.push(book);
                })
                setSearchResults(books);

            })
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {

    }, [searchResults]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <input id="search-input" placeholder="Type search term here" onChange={(event) => setSearchTerm(event.target.value)}></input>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {searchResults.length === 0 ? (
                            <div>Going to return search results here</div>
                        ) : (
                                <SearchResults searchResults={searchResults} setSearchResults={setSearchResults}/>
                            )}

                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Home;