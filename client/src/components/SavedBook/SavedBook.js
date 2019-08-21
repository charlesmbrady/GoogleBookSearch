import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import utils from '../../utils/googleAPI';

import './style.css';

function SavedBook(props) {
    const { title, authors, infoLink, description, thumbnail } = props;
<<<<<<< HEAD

    return (
        <div className="saved-book col-sm-12 col-md-4 wrapper">
            <img src={thumbnail} className="img-fluid"></img>
=======
    let book = {
        title: title,
        authors: authors,
        infoLink: infoLink,
        description: description,
        thumbnail: thumbnail
    }

    



    return (
        <div className="wrapper">
        <Row className="SavedBook">
            
        </Row>
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
        </div>
    );
};

export default SavedBook;