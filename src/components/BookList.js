// Using static contextType to access the ThemeContext.
// This makes the themeContext available to use as this.context

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div style={{ color: theme.text, background: theme.bg }} className="book-list">
                <ul>
                    <li style={{background: theme.ui}}>Wonder</li>
                    <li style={{background: theme.ui}}>The Book Thief</li>
                    <li style={{background: theme.ui}}>Becoming</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;