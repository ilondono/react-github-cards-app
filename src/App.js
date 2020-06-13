import React, { Component } from 'react';
import './App.css';
import CardsList from './components/CardsList.js';
import Form from './components/Form.js';

class App extends Component {

  state = {
    profiles: []
  }

  addProfile = (profileData) => {
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }));
  }

  render() {
    return (
      <div style={{marginLeft:'10%', width:'80%'}}>
        <div className="App">
          {this.props.title}
        </div>
        <Form addResult={this.addProfile} />
        <CardsList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
