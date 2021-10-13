const home = (req, res) => {
  res.send('Este é o /')
}

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.send('A Soma é ' + soma)
  } else {
    res.send('Esta é a calculadora, informa num1 e num2 na url')
  }
}

const isPar = (req, res) => {
  const isPar = req.params.num % 2 == 0

  if (isPar) {
    res.send('O Número é par')
  } else {
    res.send('O Número é impar')
  }
}

module.exports = {
  home,
  calc,
  isPar
}
