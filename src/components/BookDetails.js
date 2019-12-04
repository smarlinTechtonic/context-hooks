import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    const { isLightTheme, light , dark } = useContext(ThemeContext);
    const { removeBook } = useContext(BookContext);
    const theme = isLightTheme? light : dark;

    return (
    <li onClick={() => removeBook(book.id)} key={book.id} style={{background: theme.ui}}>{book.title}</li>
    );
}
 
export default BookDetails;