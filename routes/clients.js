const express = require('express')
const router = express.Router()
const controller = require('../controllers/clients')

router.get('/new', controller.create)

router.get('/list', controller.list)

module.exports = router
