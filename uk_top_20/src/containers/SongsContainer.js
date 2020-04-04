import React, { Component } from 'react';
import SongsList from '../components/SongsList';
import Song from '../components/Song';

class SongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.error);
  }

  render() {
    return (
      <div className="songs-container">
        <h4>UK Top 40</h4>
        <SongsList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongsContainer;