import React, { Component } from 'react';
import { render } from '@testing-library/react';
import SongsContainer from './containers/SongsContainer';

class App extends Component {
  render() {
    return (
      <SongsContainer />
    );
  }
}

export default App;
