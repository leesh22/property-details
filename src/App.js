import React, { Component } from 'react';
import logo from './images/hostmaker-logo.svg';

import PropertyTable from './components/PropertyTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Property Details</h1>
        </header>
        <PropertyTable/>
      </div>
    );
  }
}

export default App;