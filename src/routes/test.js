const router = require('express-promise-router')()
const test = require('../controllers/test')

router.get('/', test.get)

module.exports = router
