// Using .Consumer to access the ThemeContext and AuthContext
// Because there are 2 different contexts here we can't use static contextType here

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    render() { 
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLoggedIn, toggleLoggedIn } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{ background: theme.ui, color: theme.text }}>
                        <h1>Context App</h1>
                        <div onClick={toggleLoggedIn}>
                            {isLoggedIn ? <p>Logged in!</p> : <p>Please Log In!</p>}
                        </div>
                        <ul>
                            <li>Homey</li>
                            <li>Abouty</li>
                            <li>Contacty</li>
                        </ul>
                    </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}
 
export default Navbar;