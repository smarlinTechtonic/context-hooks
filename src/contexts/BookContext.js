import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Wonder", id: 1},
        {title: "Time of Wonder", id: 2},
        {title: "Wonderous New Beginnings", id: 3}
    ])

    const addBook = (title) => {
        setBooks([...books, {title, id: uuid()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return ( 
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;