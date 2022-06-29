/**
 * Module dependencies
 */
 const express = require('express');
 const demo = require('./demo');

const router = express.Router();

/**
 * Demo router
 */
router.use('/demo', demo);

/**
 * Expose API router
 */
module.exports = router;
