import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title);
        setTitle("");
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Book Title: </label>
            <input
                value={title}
                type="text"
                placeholder="book title"
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default BookForm;