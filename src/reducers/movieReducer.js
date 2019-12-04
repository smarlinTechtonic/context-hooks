// The reducer takes care of reading what the action type is and adding or removing a movie from state.

import uuid from 'uuid/v1';

export const movieReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...state, {title: action.movie.title, id: uuid()}];
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
}