import React from 'react';
import Song from './Song';

const SongsList = (props) => {
  if (props.songs == null || props.song.length === 0) {
    return<p>Loading...</p>;
  }
  return (
    <div className="songs-list">
      {props.songs.map((song, index) => {
      return (
        <Song
          key={index}
          position={index + 1}
          title={song['im:name'].label}
          artist={song['im:artist'].label}
          image={song['im:image'].label}
          audio={song.link[1].attributes.href}
          handlePlayPause={props.handlePlayPause}
        />
      )
    })}
    </div>
  );
};

export default SongsList;