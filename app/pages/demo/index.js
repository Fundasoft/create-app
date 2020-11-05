/**
 * Module dependencies
 */
const React = require('react');
const router = require('express').Router();
const { getText, render } = require('./controller');

/**
 * Routers
 */
router.get('/', getText, render);

/**
 * Expose router
 */
module.exports = router;
