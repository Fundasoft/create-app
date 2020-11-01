/**
 * Styles
 */
require('../pages/home/styles.scss');

/**
 * Module dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('../pages/home/view');

/**
 * Get server state
 */
const serverProps = window.__PRELOADED_STATE__;

/**
 * Mount DemoView on client
 */
ReactDOM.hydrate(
  <Home {...serverProps} />,
  document.getElementById('app-content'),
);
