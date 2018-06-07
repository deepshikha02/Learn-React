import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from '../Intro';
import Main from '../Main';

// import Series from '../../containers/series';
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My App</h1>
        </header>
        
      <Main />
      </div>
    );
  }
}

export default App;
