import React, { Component } from 'react';

//componets
import {HeaderBitso} from './header/HeaderBitso';
import {SubheaderBitso} from './header/SubheaderBitso';

import {LastTrades} from './trades/LastTrades';
import {BuyPosture} from './trades/BuyPosture';
import {SellPosture} from './trades/SellPosture';
import {ChartPanel} from './charts/ChartPanel';

//import logo from './logo.svg';
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
              <ChartPanel />
              <div class="postures">
                <BuyPosture></BuyPosture>
                <SellPosture></SellPosture>
              </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
