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
const home = require('../pages/home');

/**
 * Use route middlewares
 */
// router.use();

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect('/home'));

/**
 * Mount routers
 */
router.use('/home', home);

/**
 * Expose router
 */
module.exports = router;
