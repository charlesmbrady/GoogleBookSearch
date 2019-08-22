import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useDebounce from "../../../utils/debounceHook";
import './Home.css';

function Home() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState();
    const [savedBooks, setSavedBooks] = useState();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if(!searchTerm) {
          return;
        }
        if(debouncedSearchTerm) {
        //   API.searchTerms(search)
        //     .then(res => {
        //       if(res.data.length === 0) {
        //         throw new Error("No results found.");
        //       }
        //       if (res.data.status === "error") {
        //         throw new Error(res.data.message);
        //       }
        //       setArticleState({
        //         title: res.data[1],
        //         description: res.data[2][0],
        //         url: res.data[3][0]
        //       });
        //     })
        //     .catch(err => setError(err));
        
        }
        
      }, [debouncedSearchTerm]);

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
                        {searchTerm ? (
                            <div>Going to return search results here</div>
                        ) : (
                                <h3 id="search-instruction">Use the search bar above to search the GoogleBooks API by title, author, or keyword</h3>
                            )}

                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Home;