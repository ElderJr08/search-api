const databaseHelper = require('../database/helper');
const { loadData } = require('../../load-data')
const env = require('./config/env');

(async () => {
  try {
    await databaseHelper.connect(env.app.database.uri);
    await loadData(env.app);

    const app = require('./config/app')

    app.listen(env.app.port, () => console.log(`Server is running on port: ${env.app.port}`))

  } catch (error) {
    console.error(error)
  }
})();

