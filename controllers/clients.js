const create = (req, res) => {
  res.send('Cliente criado.')
}

const list = (req, res) => {
  res.send('Lista de clientes.')
}

module.exports = {
  create,
  list
}
