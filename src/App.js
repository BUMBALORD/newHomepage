import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
        <div class="text">DAVID HALLINAN</div>
        </div>
        <p className="margTop"> Lead Instructor - UC Berkeley Extensions Coding Bootcamp </p>
        </header>
        <div className="mainContainer">

        </div>
      </div>
    );
  }
}

export default App;
