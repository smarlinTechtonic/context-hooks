// This is a stateless functional component and uses the useState react hook

import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} required placeholder="enter a song title" />
            <input type="submit" value="Add Song" />
        </form>
    );
}
 
export default NewSongForm;