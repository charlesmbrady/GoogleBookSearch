
import { Container, Row, Col } from 'reactstrap';
import './Saved.css';
import Book from '../../book/Book';
import React, { useState, useEffect } from 'react';
import utils from '../../../utils/googleAPI';

function Saved(props) {


    const [saved, setSaved] = useState([]);

    useEffect(() => {
        utils.getBooks().then(res => {
            console.log(res.data);
            // setSaved(res.data);
        })
    }, [saved])

    return (
        <div>
            {saved.length == 0 ? (<p>No saved books</p>) :
                <Container>
                    {
                        saved.map(book => (
                            <Book
                                key={book.id}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={props.infoLink}

                            />
                        ))
                    }
                </Container>
            }

        </div>
    );
}

export default Saved;