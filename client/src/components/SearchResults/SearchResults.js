import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import './SearchResults.css';
import utils from '../../utils/googleAPI';
import React, { useEffect } from 'react';


function SearchResults(props) {

    const { searchResults, setSearchResults } = props;

    const saveBook = (book, i) => {
        utils.saveBook(book);
        const temp = searchResults.slice();
        temp.splice(i, 1);
        setSearchResults(temp);
    }


    useEffect(() => {

    }, [searchResults]);


    return (
        <div className="search-results">
            {
                searchResults.map((book, i) => (
                    <Card className="search-book" key={i}>
                        <CardHeader>{book.title}</CardHeader>
                        <CardBody>
                            <CardTitle>{book.authors}</CardTitle>
                            <CardText>{book.description}</CardText>
                            <a href={book.infoLink} target="_blank"><Button>Info</Button></a>
                        </CardBody>
                        <CardFooter><button onClick={() => saveBook(book, i)}>+</button></CardFooter>
                    </Card>
                ))
            }
        </div>
    );
}

export default SearchResults;