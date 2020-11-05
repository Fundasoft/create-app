/**
 * Module dependencies
 */
const router = require('express').Router();
const demo = require('./demo');

/**
 * Demo router
 */
router.use('/demo', demo);

/**
 * Expose API router
 */
module.exports = router;
