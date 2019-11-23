import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import './SearchResults.css';
import utils from '../../utils/googleAPI';
import FlipPage from 'react-flip-page';
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
                    // <FlipPage className="search-book">


                    //         <div className="card-body">
                    
                    //             <CardText className="description">{book.description}</CardText>
                    //             <a className="info-link" href={book.infoLink} target="_blank"><Button>Info</Button></a>
                    //         </div>
                    //         <div className="foot"><Button onClick={() => saveBook(book, i)}>+</Button></div>

                    // </FlipPage>
                    <FlipPage className="search-book" key={i}>
                        <div className="flip-book">
                            <img src={book.thumbnailLink} alt="antelope" className="cover"></img>
                            <div className="foot"><Button onClick={() => saveBook(book, i)}>+</Button></div>
                        </div>
                        <div>
                            <div className="title"><a href={book.infolink}>{book.title}</a></div>
                            <div className="authors">{book.authors}</div>
                            <div className="description">{book.description}</div>
                            <div className="foot"><Button onClick={() => saveBook(book, i)}>+</Button></div>
                        </div>


                    </FlipPage>
                ))
            }
        </div>
    );
}

export default SearchResults;