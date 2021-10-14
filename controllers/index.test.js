const controller = require('./index')
const sinon = require('sinon')

describe('index controller', () => {
  it('home', () => {
    let res = {
      send: function () {}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Este é o /')
    controller.home({}, res)
  })

  it('handles without num1 and num2', () => {
    let res = {
      send: function () {}
    }
    let mock = sinon.mock(res)
    mock
      .expects('send')
      .once()
      .withArgs('Esta é a calculadora, informa num1 e num2 na url')
    controller.calc({ query: {} }, res)
  })

  it('handles without num1', () => {
    let res = {
      send: function () {}
    }
    let req = {
      query: {
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock
      .expects('send')
      .once()
      .withArgs('Esta é a calculadora, informa num1 e num2 na url')
    controller.calc(req, res)
  })

  it('handles without num2', () => {
    let res = {
      send: function () {}
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock
      .expects('send')
      .once()
      .withArgs('Esta é a calculadora, informa num1 e num2 na url')
    controller.calc(req, res)
  })

  it('calc', () => {
    let res = {
      send: function () {}
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock
      .expects('send')
      .once()
      .withArgs('A Soma é ' + 30)
    controller.calc(req, res)
  })

  it('isPar - par', () => {
    let res = {
      send: function () {}
    }
    let req = {
      params: {
        num: 10
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('O Número é par')
    controller.isPar(req, res)
  })

  it('isPar - impar', () => {
    let res = {
      send: function () {}
    }
    let req = {
      params: {
        num: 11
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('O Número é impar')
    controller.isPar(req, res)
  })
})
