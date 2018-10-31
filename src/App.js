import React, { Component } from 'react';
import BaseComponent from './components/BaseComponent/BaseComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseComponent library={'Redux'} />
      </div>
    );
  }
}

export default App;
