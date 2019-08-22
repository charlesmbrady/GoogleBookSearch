import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import utils from '../../utils/googleAPI';

import './style.css';

function SavedBook(props) {
    const { title, authors, infoLink, description, thumbnail } = props;

    return (
        <div className="saved-book col-sm-12 col-md-4 wrapper">
            <img src={thumbnail} className="img-fluid"></img>
        </div>
    );
};

export default SavedBook;