const { MongoClient } = require('mongodb')

let client = null;
let configUri;

const connect = async(uri) => {
  try {
    configUri = uri;
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    return client;
        
  } catch (error) {
    throw new Error(`Mongo failed to connect ${error}`);
  }
}

const getCollection = async (name) => {
  if (!client?.isConnected()) {
    await connect(configUri)
  }
  return client.db().collection(name, { autoIndexId: false })
};

module.exports = {
  connect,
  getCollection,
}