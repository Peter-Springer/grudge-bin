import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Grudge from './components/Grudge';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home}>
      <IndexRoute component={App} />
      <Route path='/Grudge' component={Grudge} />
    </Route>
  </Router>
)

export default Routes
