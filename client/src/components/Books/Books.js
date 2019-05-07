import React from 'react';
import { Container} from 'reactstrap';
import Book from '../book/Book';

function Books(props) {
    return (
        <div>
            <Container>
                {
                    props.searchResults.map(book => (
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
        </div>
    );
}


export default Books;