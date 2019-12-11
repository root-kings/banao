/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
let router = require('express').Router()

router.get('/docs', require('./docs'))

// Controllers -----

module.exports = router