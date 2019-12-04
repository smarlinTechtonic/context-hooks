// This component was first created as a Class based component
// Using static contextType to access the ThemeContext
// This makes the ThemeContext available to use as this.context
// Note: BookList component is also wrapped inside ThemeContextProvider in App.js
// It has been refactored as a sfc

// import React, { Component } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import BookForm from './BookForm';

// class BookList extends Component {
//     // static contextType only works with class based components not stateless functional components
//     static contextType = ThemeContext;

//     render() {
//         // this.context now has all the theme properties defined in ThemeContext
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <div style={{ color: theme.text, background: theme.bg }} className="book-list">
//                 <ul>
//                     <li style={{background: theme.ui}}>Wonder</li>
//                     <li style={{background: theme.ui}}>The Book Thief</li>
//                     <li style={{background: theme.ui}}>Becoming</li>
//                 </ul>
//             </div>
//          );
//     }
// }

const BookList = () => {
    const { isLightTheme, light , dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme? light : dark;

    return books.length ? ( 
        <div style={{ color: theme.text, background: theme.bg }} className="book-list">
            <p>Currently you have {books.length} books to read!</p>
            <ul>{books.map(book => <BookDetails book={book} key={book.id} />)}</ul>
            <BookForm />
        </div>
        ) : (
        <div>
            <p>Currently you have 0 books to read!</p>
            <BookForm />
        </div>
        );
}
 
export default BookList;