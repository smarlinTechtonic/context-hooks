import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {text: '#555', bg: '#eee', ui: '#ddd'},
        dark: {text: '#ddd', bg: '#555', ui: '#333'}
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;