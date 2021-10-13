const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/', controller.home)

router.get('/calc', controller.calc)

router.get('/par/:num', controller.isPar)

module.exports = router
