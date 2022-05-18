/**
 * Module dependencies
 */
const React = require('react');
const view = require('./view');
const renderView = require('../../utils/render-view');
const demoService = require('../../../services/demo');

exports.getText = function getText(req, res, next) {
  demoService.getJoke()
    .then(response => { res.locals.joke = response; next(); })
    .catch(error => { console.log(error); next(error); })
}

/**
 * Render Demo
 */
exports.render = function render(req, res) {
  const props = { message: res.locals.joke.value };
  const config = { page: 'demo', title: 'Demo Page' };
  /**
   * Render View
   */
  return renderView(res, view, props, config);
};
