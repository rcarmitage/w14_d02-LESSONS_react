import React from 'react';
import Song from './Song';

const SongsList = (props) => {
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
          />
        )
      })}
    </div>
  )
}

export default SongsList;