import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';

class App extends Component {
  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
