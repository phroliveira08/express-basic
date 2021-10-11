const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.send('Cliente criado.')
})

router.get('/list', (req, res) => {
  res.send('Lista de clientes.')
})

module.exports = router
