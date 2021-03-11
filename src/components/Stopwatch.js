import React, { Component } from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Stopwatch extends Component {
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button>Start</button>
        <button>Reset</button>
      </div>
    );
  }
}
