const router = require('express-promise-router')()
const github = require('../controllers/github')

router.get('/', github.getRepository)

module.exports = router
