/**
 * Module dependencies
 */
const router = require('express').Router();

/**
 * Set up mocks
 */
// require('../../mocks');

/**
 * Routers
 */
const demo = require('../pages/demo');

/**
 * Use route middlewares
 */
// router.use();

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect('/demo'));

/**
 * Mount routers
 */
router.use('/demo', demo);

/**
 * Expose router
 */
module.exports = router;
