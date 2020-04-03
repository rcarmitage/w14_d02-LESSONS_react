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

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h4>UK Top 40</h4>
        <SongsList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongsContainer;