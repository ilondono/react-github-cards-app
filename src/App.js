import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';

const testData = [
  {
    avatar_url: 'https://avatars0.githubusercontent.com/u/42843368?v=4',
    name: 'Raghav Virmani',
    company: 'Thapar University 22',
    public_repos: '50',
  },
  {
    avatar_url: 'https://avatars1.githubusercontent.com/u/41656?v=4',
    name: 'Caroline Meldgaard',
    company: 'Børn i byen',
    public_repos: '7',
  },
];

class App extends Component {
  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <Card {...testData[0]}/>
      </div>
    );
  }
}

export default App;
