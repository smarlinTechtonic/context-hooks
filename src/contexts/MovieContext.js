// We reconfigured this component to use the useReducer hook instead of the useState hook
// This allows us to take the addMovie and removeMovie fns and move them into the movieReducer instead.
// Now instead of passing them down to all children, we pass down ONE function, the dispatch function.
// We're also starting off in this case with state (movies) set to an empty array.
// uuid is moved to the movieReducer instead

import React, { createContext, useReducer } from 'react';
// import uuid from 'uuid/v1';
import { movieReducer } from '../reducers/movieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, []);
    
    // const [movies, setMovies] = useState([
    //     {title: "Game Changers", id: 1},
    //     {title: "Wonder Woman", id: 2}
    // ])

    // const addMovie = (title) => {
    //     setMovies([...movies, {title, id: uuid()}])
    // }

    // const removeMovie = (id) => {
    //     setMovies(movies.filter(movie => movie.id !== id))
    // }

    return ( 
        // <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
        <MovieContext.Provider value={{ movies, dispatch }}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;