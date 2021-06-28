const adaptRoute = require('../adapters/router-adapter')
const { makeSearchController } = require('../factories')

module.exports = router => {
  router.get('/search', adaptRoute(makeSearchController()))
}