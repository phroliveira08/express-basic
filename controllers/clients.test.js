const controller = require('./clients')
const sinon = require('sinon')

describe('clients controller', () => {
  it('return all clients', () => {
    let res = {
      send: function () {}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Lista de clientes.')
    controller.list({}, res)
  })
  it('create client', () => {
    let res = {
      send: function () {}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Cliente criado.')
    controller.create({}, res)
  })
})
