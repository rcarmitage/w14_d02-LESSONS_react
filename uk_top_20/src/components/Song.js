import React, { Component } from 'react';

class Song extends Component {
  render() {
    return (
      <div className="song">
        <img src={this.props.image} />

        <div className="details">
          <h3>{this.props.position}. {this.props.title}</h3>
          <h4>{this.props.artist}</h4>
        </div>
      </div>
    );
  }
}

export default Song;