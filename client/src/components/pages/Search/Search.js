
import { Container, Row, Col } from 'reactstrap';
import './Search.css';
import '../../../utils/googleAPI';
import googleAPI from '../../../utils/googleAPI';
import React, { useState, useEffect } from 'react'
import Books from '../../Books/Books';

function Search(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
    
        if(searchTerm !== undefined){
            googleAPI.search(searchTerm)
            .then((res) => {
                console.log(res.data.items);
                const newResults = [];
                res.data.items.forEach(book => {
                    if(book.volumeInfo.title && book.volumeInfo.imageLinks){
                        newResults.push(book.volumeInfo);
                    }
                    else{
                        return 0;
                    }
                })
                setSearchResults(newResults);
            })
        }
        
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
          
                <h2>Search results</h2>
            {searchResults.length == 0 ? (<p>Search for books</p>) : 
            (
                <Books searchResults={searchResults}/>
            )
        }
            
        </div>
    );
}

export default Search;