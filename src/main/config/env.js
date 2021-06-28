require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    database: {
      uri: process.env.MONGO_URI,
    },
    users: {
      fileName: process.env.USERS_FILE_NAME,
      separator: process.env.USERS_FILE_SEPARATOR,
    },
    relevance: {
      high: {
        fileName: process.env.HIGH_RELEVANCE_FILE_NAME,
      },
      less: {
        fileName: process.env.LESS_RELEVANCE_FILE_NAME,
      },
    },
  },
}