import React from 'react';
import SongItem from './SongsItem';

const SongsList = ({data}) => {
  const songNodes = data.map(song => {
    return (
      <Song>
        {song.title}
      </Song>
    );
  });

  return (
    <div className="songs-list">
      {songNodes}
    </div>
  )
}

export default SongsList;