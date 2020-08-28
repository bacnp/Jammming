import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [
      {name: 'name',
      artist: 'artist',
      album: 'album',
      id: 1,
      },
      {name: 'name',
      artist: 'artist',
      album: 'album',
      id: 2,
      },
      {name: 'name',
        artist: 'artist',
        album: 'album',
        id: 3,
      },
    ] }
  }
  render () {
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} />
        <Playlist searchResults={this.state.searchResults} />
      </div>
    </div>
  </div>
  )
  };
}

export default App;
