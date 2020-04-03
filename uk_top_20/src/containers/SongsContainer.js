import React from 'react';

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