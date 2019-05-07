import React from 'react';
import './save-btn.css';
import utils from '../../utils/googleAPI';

function SaveBtn(props){
    const book = {
        title: props.title,
        authors: props.authors,
        image: props.image,
        description: props.description,
        link: props.link
    }



    return (
        <div className="save-btn" onClick={() => props.saveBook(props.book)}>
            Save
        </div>
    );
}

export default SaveBtn;