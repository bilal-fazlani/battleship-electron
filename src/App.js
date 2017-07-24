import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BattleShip from "./Components/BattleShip";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BattleShip rows={10} columns={10} />
      </div>
    );
  }
}

export default App;
