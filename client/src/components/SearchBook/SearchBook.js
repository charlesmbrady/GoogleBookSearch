import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import utils from '../../utils/googleAPI';


import './style.css';

function SearchBook(props) {
    const { title, authors, infoLink, description, thumbnail } = props;

    const submitBook = () => {

        //post book to database
        utils.saveBook({
            title: title,
            authors: authors,
            infoLink: infoLink,
            description: description,
            thumbnail: thumbnail
        }).then(({ data }) => {
            console.log(data.title, 'book submitted')
        }).catch(err => {
            console.log(err.response)
        });
        removeBook(title);
    };

    const removeBook = (bookTitle) => {
        const tempResults = props.searchResults.filter(value => {
            return value.title !== bookTitle;
        });
        props.setSearchResults(tempResults);

    }



    return (
        <div className="wrapper">
            <Row className="searchbook">
                <Col className="col-md-6 col-sm-12">
                    <h1><a href={infoLink} target="_blank" className="infoLink">{title}</a></h1>
                    <h5>Written by: {authors}</h5>
                    <i className="far fa-save fa-2x icon" onClick={() => submitBook()}></i>
                    <br></br>
                    <p>{description}</p>
                </Col>
                <Col className="col-md-6 col-sm-12">
                    <a href={infoLink} target="_blank"><img className="img-fluid img-thumbnail" src={thumbnail || "https://via.placeholder.com/150/000000/FFFFFF/?text=Noimageyet"} alt="screenshot"></img></a>
                </Col>
            </Row>
        </div>
    );
};

export default SearchBook;