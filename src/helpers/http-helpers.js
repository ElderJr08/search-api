const { ServerError } = require('../errors')

const serverError = () => ({
  statusCode: 500,
  body: new ServerError(),
})

const ok = (data) => ({
  statusCode: 200,
  body: data,
})

module.exports = {
  serverError,
  ok,
}