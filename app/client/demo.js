/**
 * Styles
 */
require('../pages/demo/styles.scss');

/**
 * Module dependencies
 */
const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const Demo = require('../pages/demo/view');

/**
 * Get server state
 */
const serverProps = window.__PRELOADED_STATE__;

/**
 * Mount DemoView on client
 */
hydrateRoot(
  document.getElementById('app-content'),
  <Demo {...serverProps} />,
);
