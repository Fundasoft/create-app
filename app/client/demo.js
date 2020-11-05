/**
 * Styles
 */
require('../pages/demo/styles.scss');

/**
 * Module dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const Demo = require('../pages/demo/view');

/**
 * Get server state
 */
const serverProps = window.__PRELOADED_STATE__;

/**
 * Mount DemoView on client
 */
ReactDOM.hydrate(
  <Demo {...serverProps} />,
  document.getElementById('app-content'),
);
