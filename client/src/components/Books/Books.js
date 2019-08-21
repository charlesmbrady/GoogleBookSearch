import React from 'react';
import { Container} from 'reactstrap';
import Book from '../book/Book';

function Books(props) {
    return (
            <Container>
                {
                    props.searchResults.map(book => (
                        <Book
                            key={book.id}
                            title={book.title}
                            authors={book.authors ? book.authors.join(', ') : 'No Recorded Authors'}
                            description={book.description}
                            link={book.infoLink}
                            thumbnail={book.imageLinks.smallThumbnail}
                            
                        />
                    ))
                }
            </Container>
    );
}


export default Books;