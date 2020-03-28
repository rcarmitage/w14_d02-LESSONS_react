import React from 'react';

const CountrySelector = (props) => {
  const options = props.countries.map((country, index) => {
    return <option value={index} key={index}>{country.name}</option>
  })
  
  return (
    <select name="country-selector" id="country-selector">
      <option disabled selected>Choose a country...</option>
      { options }
    </select>
  )
}

export default CountrySelector;
