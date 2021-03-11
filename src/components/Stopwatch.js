import React, { Component } from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

state = {
  isRunning: false
};


class Stopwatch extends Component {
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button>{ this.state.isRunning ? 'Stop' : 'Start'} </button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
