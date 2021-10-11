const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.use((req, res, next) => {
  console.log('Passando por todas requisições')
  next()
})

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => {
  console.log('Rodando na porta ', port)
})
