import React, { Component } from 'react';

import './App.css';
import Timer from './components/Timer';

export default class App extends Component {
  render() {
    return (
      <div className="app-main">
        <h1>P O M O T I M 3 R</h1>
        <Timer />
      </div>
    );
  }
}
