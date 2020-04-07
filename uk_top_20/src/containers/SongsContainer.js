import React, { Component } from 'react';
import SongsList from '../components/SongsList';
import Song from '../components/Song';
import Titlebar from '../components/TitleBar';

class SongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidMount() {
    this.loadSongs(this.props.genre[0].url)
  }

  loadSongs(url) {
    fetch(url)
      .then(res => res.json())
      .then(songsList => this.setState({ songs: songsList.feed.entry }))
      .catch(err => console.error);
  }

  handlePlayPause(audio) {
    audio.paused ? audio.play() : audio.pause();
    audio.classList.toggle('playing');
  }

  handleSelectChange(event) {
    this.loadSongs(event.target.value);
  }

  render() {
    return (
      <div className="songs-container">
        <Titlebar
          handleSelectChange={this.handleSelectChange}
          genres={this.props.genres}
        />
        <SongsList
          songs={this.state.songs}
          url={this.props.genres[0].url}
          handleSelectChange={this.handleSelectChange}
          handlePlayPause={this.handlePlayPause}
        />
      </div>
    );
  }
}

export default SongsContainer;