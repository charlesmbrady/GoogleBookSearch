import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Saved.css';
import SearchBook from '../../SearchBook/SearchBook';
import React, { useState, useEffect } from 'react';
import utils from '../../../utils/googleAPI';

function Saved(props) {


    const [saved, setSaved] = useState([]);

    useEffect(() => {
        utils.getBooks().then(res => {
            console.log(res.data);
            setSaved(res.data);
        })
    }, [])

    const deleteBook = (id) => {

        //post book to database
        utils.removeBook(id).then(({ data }) => {
            console.log(data, 'axios data')
        }).catch(err => {
            console.log(err.response)
        });

    };

    return (
        // <div>
        //     {saved.length == 0 ? (<p>No saved books</p>) :
        //         <Container>
        //             {
        //                 saved.map(book => (
        //                     // <Book
        //                     //     key={book.id}
        //                     //     title={book.title}
        //                     //     authors={book.authors}
        //                     //     description={book.description}
        //                     //     link={book.infoLink}
        //                     //     _id={book._id}

        //                     // />
        //                     <Container className="book">
        //                         <Row>
        //                             <Col className="col-md-4">
        //                                 <h3>{book.title}</h3>
        //                                 <h6>Written by: {book.authors}</h6>

        //                             </Col>
        //                             <Col className="col-md-3">
        //                                 <a href={book.link} target="_blank">View</a>

        //                                 <button onClick={() => deleteBook(book._id)}>Remove</button>


        //                             </Col>
        //                         </Row>
        //                         <Row>
        //                             <Col className="col-md-3"> <img src={book.thumbnail}></img> </Col>
        //                             <Col> Description: {book.description} </Col>
        //                         </Row>
        //                     </Container>
        //                 ))
        //             }
        //         </Container>
        // }

        // </div>
        <Container className="search">
            <Row className="justify-content-end other-nav">
                <Col className="col-md-2">
                    <Link to="/search" className="nav-button other">Search</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="title other-page">Saved Books</h2>
                </Col>
            </Row>
            {
                saved.map(book => (
                    <SearchBook
                        title={book.title}
                        description={book.description}
                        authors={book.authors}
                        infoLink={book.infoLink}
                        
                    />
                ))
            }
        </Container>

    );
}

export default Saved;