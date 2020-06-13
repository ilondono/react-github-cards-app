import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList.js';
import Form from './components/Form.js';

const testData = require('./data/test-data.json');

class App extends Component {

  addProfile(data) {
    console.log(data);    
  }

  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <Form addResult={this.addProfile} />
        <CardsList profiles={testData} />
      </div>
    );
  }
}

export default App;
