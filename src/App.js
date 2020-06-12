import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';

const testData = require('./data/test-data.json');

class App extends Component {
  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <Card {...testData[0]}/>
        <Card {...testData[1]}/>
        <Card {...testData[2]}/>
      </div>
    );
  }
}

export default App;
