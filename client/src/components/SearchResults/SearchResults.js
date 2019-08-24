// import {
//     Card, Button, CardHeader, CardFooter, CardBody,
//     CardTitle, CardText
// } from 'reactstrap';
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


                    //     <img className="cover" key={i}
                    //         src={book.smallThumbnailLink}
                    //         style={
                    //             {
                    //                 // backgroundImage: `url(${book.smallThumbnailLink})`,
                    //                 // backgroundSize: 'contain',
                    //                 // backgroundRepeat: 'no-repeat'
                    //             }
                    //         }
                    //     ></img>
                    //         <div className="title">{book.title}</div>
                    //         <div className="card-body">
                    //             <CardTitle className="authors">{book.authors}</CardTitle>
                    //             <CardText className="description">{book.description}</CardText>
                    //             <a className="info-link" href={book.infoLink} target="_blank"><Button>Info</Button></a>
                    //         </div>
                    //         <div className="foot"><Button onClick={() => saveBook(book, i)}>+</Button></div>

                    // </FlipPage>
                    <FlipPage className="search-book" key={i}>
                        <div>
                            <img src="http://unsplash.it/320/480" alt="antelope" />
                        </div>

                        <div className="flip-book">
                            <img src={book.thumbnailLink} alt="antelope"></img>
                        </div>

                    </FlipPage>
                ))
            }
        </div>
    );
}

export default SearchResults;