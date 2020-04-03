import React from 'react';
import SongsItem from './SongsItem';

const SongsList = ({data}) => {
  const songNodes = data.map(song => {
    return (
      <SongsItem>
        {song.title}
      </SongsItem>
    );
  });

  return (
    <div className="songs-list">
      {songNodes}
    </div>
  )
}

export default SongsList;