/**
 * Module dependencies
 */
const router = require('express').Router();
const demoService = require('../services/demo');

/**
 * /demo/req endpoint
 */
router.get('/req', (req, res) => {
  res.status(200).json(req);
});

router.get('/joke', (req, res, next) => {
  demoService.getJoke()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(next)
})

/**
 * Expose router
 */
module.exports = router;
