import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'

hydrate(
  <App name={window.__INITIAL_DATA__}/>,
  document.getElementById('app')
);  