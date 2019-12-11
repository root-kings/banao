/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
let router = require('express').Router()

router.get('/', (req, res) => {
	res.send('Welcome to Express!')
})

// Controllers -----

module.exports = router