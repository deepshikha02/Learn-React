import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';


class App extends Component {

  state = {
    data : []
  };

  componentDidMount(){
    // const series = ["vikings","got"];
    // setTimeout(() => {
    //   this.setState({
    //    data : series
    //   });
    // }, 2000);

    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then(response => response.json())
    .then(json => {console.log(json)
    this.setState({
      data : json
    });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My App</h1>
        </header>
        <Intro message="custom message using props" />
        The length of state data array is : {this.state.data.length}
      </div>
    );
  }
}

export default App;
