// This component now deconstructs the dispatch func instead of deconstructing the addMovie func from the MovieContext.
// It now needs to invoke dispatch and pass an action object which has a type of action and then the movie id
// previously would have called removeMovie(id) instead.

import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import  { ThemeContext } from '../contexts/ThemeContext';
import MovieForm from './MovieForm';

const MovieList = () => {
    // const { movies, removeMovie } = useContext(MovieContext);
    const { movies, dispatch } = useContext(MovieContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return movies.length? ( 
        <div style={{ color: theme.text, background: theme.bg }} className="movie-list">
            There are {movies.length} movies in your Watchlist!
            <ul> {movies.map( movie => <li onClick={() => dispatch({type: 'REMOVE_MOVIE', id: movie.id})} style={{background: theme.ui}} key={movie.id}>{movie.title}</li>)}
            </ul>
            <MovieForm />
        </div>
    ) : (
        <div>
            There are {movies.length} Movies in your watchlist!
             <MovieForm />
        </div>
    )
}
 
export default MovieList;