import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import utils from '../../utils/googleAPI';

import './style.css';

function SavedBook(props) {
    const { title, authors, infoLink, description, thumbnail } = props;
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
        </div>
    );
};

export default SavedBook;