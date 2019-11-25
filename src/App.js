// ThemeContextProvider and AuthContextProvider wrap children components who can then access context

import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/SongList';
import NewSongForm from './components/NewSongForm';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookList />
      </AuthContextProvider>
      </ThemeContextProvider>

      <SongList />
    </div>
  );
}

export default App;
