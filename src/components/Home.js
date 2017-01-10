import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section>
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Home;
