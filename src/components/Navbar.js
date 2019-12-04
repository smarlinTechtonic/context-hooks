// Using .Consumer to access the ThemeContext and AuthContext in a class component
// Because there are 2 different contexts here we can't use static contextType
// static contextType can also NOT be used with sfc
// We couls however use a sfc instead and then use the useContext hook as well

import React, { Component } from 'react';
// import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    render() { 
        return (
            // Consumers can also be used inside stateless func components
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLoggedIn, toggleLoggedIn } = authContext;
                    const { toggleTheme, isLightTheme, light, dark } = themeContext;
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
                            <button onClick={toggleTheme}>Toggle Theme</button>
                        </ul>
                    </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

// const Navbar = () => {
//     const { toggleTheme,isLightTheme, light, dark } = useContext(ThemeContext);
//     const { toggleLoggedIn, isLoggedIn } = useContext(AuthContext);
//     const theme = isLightTheme ? light : dark;
//     return (
//         <nav style={{ background: theme.ui, color: theme.text }}>
//         <h1>Context App</h1>
//         <div onClick={toggleLoggedIn}>
//             {isLoggedIn ? <p>Logged in!</p> : <p>Please Log In!</p>}
//         </div>
//         <ul>
//             <li>Homey</li>
//             <li>Abouty</li>
//             <li>Contacty</li>
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         </ul>
//     </nav>
//     );
// }
 
export default Navbar;