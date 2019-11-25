import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isLoggedIn: false
     }

    toggleLoggedIn = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }

    render() { 
        return ( 
            <AuthContext.Provider value={{ ...this.state, toggleLoggedIn: this.toggleLoggedIn }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;