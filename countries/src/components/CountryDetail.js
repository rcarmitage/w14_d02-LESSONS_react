import React, { Fragment } from 'react';

const CountryDetail = (props) => {
  if (!props.country) return null;
  return (
    <>
      <h3>{props.country.name}</h3>
      <p>Capital: {props.country.capital}</p>
      <p>Demonym: {props.country.demonym}</p>
      <img src={props.country.flag} />
    </>
  );
}

export default CountryDetail;
