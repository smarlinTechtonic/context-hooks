import uuid from 'uuid/v1';

export const songReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SONG':
            return [...state, {title: action.song.title, id: uuid()}]
        case 'DELETE_SONG':
            return state.filter(song => song.id !== action.song.id);
        default:
        return state;
    }
}