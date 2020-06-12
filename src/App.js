import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList.js';

const testData = require('./data/test-data.json');

class App extends Component {
  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <CardsList profiles={testData} />
      </div>
    );
  }
}

export default App;
