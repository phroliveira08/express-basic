const express = require('express')
const router = express.Router()
const clientsControllers = require('../controllers/clients')

router.get('/new', clientsControllers.create)

router.get('/list', clientsControllers.list)

module.exports = router
