import React, { Component } from 'react';
import axios from 'axios';

export default class Grude extends Component {
  constructor() {
    super();
    this.state = {
      person: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/v1/grudges/${this.props.routeParams.id}`)
    .then((response) => {
      this.setState({ person: response.data.person });
    });
  }

  resolveGrudge() {
    axios.put(`/api/v1/grudges/${this.props.routeParams.id}`, {
      name: 'hello',
      grudge: 'new grudge',
      status: true
    });
  }

  render() {
    if (this.state.person && this.state.person.status === false) {
      return(
        <section className='grudge-details'>
          <h1>Name: {this.state.person.name}</h1>
          <h1>Grudge: {this.state.person.grudge}</h1>
          <h1>Status: 😡</h1>
          <button className='forgive' onClick={()=>this.resolveGrudge()}>Forgive</button>
        </section>
      )
    } else {
      return (
        <section>
          <h1>Name: {this.state.person.name}</h1>
          <h1>Grudge: {this.state.person.grudge}</h1>
          <h1>Status: 😀</h1>
        </section>
      )
    }
  }
}
