import React, { Component } from 'react';
import Grudge from './Grudge';
import axios from 'axios';
import '../App.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.get('/api/v1/urls')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  createGrudge(e) {
    e.preventDefault();
    axios.post('api/v1/urls', {
      name: document.getElementById('name').value,
      grudge: document.getElementById('grudge').value
    })
  .then( () => {
    console.log('this worked!');
    })
  .catch( () => {
    console.log('request failed');
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Grudge Bin</h2>
        </div>
        <Grudge createGrudge={(e) => this.createGrudge(e)}/>
      </div>
    );
  }
}

export default App;
