const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Este é o /')
})

router.get('/pagina', (req, res) => {
  res.send('Este é o /pagina')
})

module.exports = router
