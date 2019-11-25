// This is a stateless functional component and uses the useState react hook

import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: "This Wild Darkness", id: 1},
        {title: "Shake if Off", id: 2},
        {title: "Hotel", id: 3},
        {title: "Boo on Yah", id: 4}
    ]);

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}]);
    }
    return ( 
        <div>
            <ul>
                { songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
     );
}
 
export default SongList;