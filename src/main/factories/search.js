const searchController = require('../../controllers/search-controller');
const repositories = require('../../repositories')

const makeSearchController = () => {
  const search = searchController(repositories)

  return search;
}

module.exports = makeSearchController;