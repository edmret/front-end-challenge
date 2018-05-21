import React, { Component } from 'react';

//componets
import {HeaderBitso} from './header/HeaderBitso';
import {SubheaderBitso} from './header/SubheaderBitso';

import {LastTrades} from './trades/LastTrades';

import logo from './logo.svg';
import './App.css';
import './App.scss'; 

//import fonts
//import '../public/fonts/DINPro-Light.otf';


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HeaderBitso></HeaderBitso>
        <SubheaderBitso></SubheaderBitso>

        <div className="app-content">
          <LastTrades></LastTrades>
          <main>

          </main>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
