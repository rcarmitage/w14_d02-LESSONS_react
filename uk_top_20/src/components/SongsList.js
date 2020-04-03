import React from 'react';

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