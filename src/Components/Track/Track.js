import React from 'react';

import './TrackList.css';


class TrackList extends React.Component {
    renderAction() {
        if (this.props.isRemoval) {
           return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render () {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>track name will go here </h3>
                <p>track artist will go here track album will go here </p>
            </div>
            <button class="Track-action"> + or - will go here </button>
            </div>
            )
    };
  }
  
  export default TrackList;