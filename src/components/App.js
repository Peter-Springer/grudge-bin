import React, { Component } from 'react';
import GrudgeForm from './GrudgeForm';
import Grudges from './Grudges';
import axios from 'axios';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.getGrudges();
  }

  getGrudges() {
    axios.get('/api/v1/grudges')
    .then((response) => {
      this.setState({ people: response.data });
    });
  }

  createGrudge(e) {
    e.preventDefault();
    axios.post('api/v1/grudges', {
      name: document.getElementById('name').value,
      grudge: document.getElementById('grudge').value
    })
  .then( () => {
    console.log('this worked!');
    })
  .catch( () => {
    console.log('request failed');
    });
    this.getGrudges();
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Grudge Bin</h2>
        </div>
        <GrudgeForm createGrudge={(e) => this.createGrudge(e)}/>
        <Grudges people={this.state.people}/>
      </div>
    );
  }
}

export default App;
