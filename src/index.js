import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { hashHistory } from 'react-router';
import Routes from './routes'

ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
