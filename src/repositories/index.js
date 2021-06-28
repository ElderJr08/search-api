const relevantRepository = require('./relevant-repository');
const userRepository = require('./user-repository');

module.exports = {
  ...relevantRepository,
  ...userRepository,
}