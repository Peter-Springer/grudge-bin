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

  render() {
    if (this.state.person && this.state.person.status === false) {
      return(
        <div>
        <h1>Name: {this.state.person.name}</h1>
        <h1>Grudge: {this.state.person.grudge}</h1>
        <h1>Status: 😀</h1>
        </div>
      )
    } else {
      return (
        <div>
        <h1>Name: {this.state.person.name}</h1>
        <h1>Grudge: {this.state.person.grudge}</h1>
        <h1>Status: 😡</h1>
        </div>
      )
    }
  }
}
