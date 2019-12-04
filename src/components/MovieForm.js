// This component now deconstructs dispatch func instead of deconstructing the addMovie func from the MovieContext.
// It now needs to invoke dispatch and pass an action object which has a type of action and then the movie.
// previously would have called addMovie(title) instead.

import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieForm = () => {
    const { dispatch } = useContext(MovieContext);
    const [title, setTitle] = useState("");

    const addNewMovie = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_MOVIE', movie: {title}});
        setTitle("");
    }

    return ( 
        <form onSubmit={addNewMovie}>
            <input
                onChange={e => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="enter movie title">
            </input>
            <input type="submit" value="Add Movie" />
        </form>
    );
}
 
export default MovieForm;