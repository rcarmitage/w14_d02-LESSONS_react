import React from 'react';

const Titlebar = (props) => {
  return (
    <div>
      <H1>Hits</H1>
      <select onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select>
    </div>
  );
};

export default Titlebar;