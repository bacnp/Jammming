import React from 'react';

import './PlayList.css';


class PlayList extends React.Component {
    render () {
        return (
        <div className="PlayList">
            <input value="New Playlist"/>
            <TrackList component />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        )
    };
  }
  
  export default PlayList;