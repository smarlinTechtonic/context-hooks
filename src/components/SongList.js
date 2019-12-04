// This is a stateless functional component and uses the useState hook
// It also uses the useEffect hook
// It also uses the useContext hook
// In order to use the ThemeContext, make sure this component
// is wrapped in ThemeContextProvider in the App.js file

import React, { useState, useEffect, useContext } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';
import { ThemeContext } from '../contexts/ThemeContext';

const SongList = () => {
    const {isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const [songs, setSongs] = useState([
        {title: "This Wild Darkness", id: 1},
        {title: "Shake if Off", id: 2},
        {title: "Hotel California", id: 3}
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}]);
    }
    useEffect(()=>{ console.log("useEffectHook ran", songs)}, [songs]);
    useEffect(()=>{ console.log("useEffectAge", age)}, [age]);

    return ( 
        <div style={{ color: theme.text, background: theme.bg }} className="song-list">
            <ul>
                { songs.map(song => <li style={{background: theme.ui}} key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={()=> setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;