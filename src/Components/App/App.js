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
    ],
    playlistName: "Melody Marks",
    playlistTracks: [{
      name: "Melody Mark on Track",
      artist: "Melody Mark",
      album: 'Melody Mark Tour',
      id: 4
    }]
   }
   this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track)
    this.setState ={playlistTracks: this.state.playlistTracks }
  }
  render () {
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks ={this.state.playlistTracks }  />
      </div>
    </div>
  </div>
  )
  };
}

export default App;
