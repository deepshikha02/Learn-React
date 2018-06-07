import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My App</h1>
        </header>
        <Intro message="custom message using props" />
      </div>
    );
  }
}

export default App;
