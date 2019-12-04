// ThemeContextProvider and AuthContextProvider wrap children components who can then access context
// Ditto for BookContextProvider and MovieContextProvider

import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import SongList from './components/SongList';
import MovieList from './components/MovieList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import MovieContextProvider from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        <MovieContextProvider>
          <MovieList />
        </MovieContextProvider>
      </AuthContextProvider>
      <SongList />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
