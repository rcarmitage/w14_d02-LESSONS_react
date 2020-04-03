import React from 'react';
import SongsList from '../components/SongsList';
import SongsItem from '../components/SongsItem';

class SongsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  render() {
    return (
      <div>
        <h4>Songs list goes here</h4>
      </div>
    )
  }
}

export default SongsContainer;