import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookListContext';

function Booklist() {
    const { books, setBooks } = useContext(BookContext);
    
  return (
    <>
        <h1 className='bg bg-secondary'>Booklist</h1>
        { books.length ? (
            <div  className='book-list'>
                { books.map(book => {
                    return(
                        <ul key={book.id}>
                            <li>Title: { book.title }</li>
                            <li>Price: { book.price }</li>
                        </ul>
                    )
                })}
            </div>
        ) : (
            <div className='bg bg-info' style={{ "padding": "20px", "marginTop": "-10px" }}>
                <p className='text text-secondary'>No Books found!</p>
            </div>
        )}
    </>
  )
}

export default Booklist