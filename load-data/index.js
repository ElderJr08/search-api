const fs = require('fs');
const path = require('path');

const { getCollection } = require('../src/database/helper');

const prepareData = (fileName) => {
  const filePath = path.resolve('data-to-load', fileName)

  const data = Buffer.from(fs.readFileSync(filePath)).toString()
  const rows = data.split(/\r\n/);

  return rows;
}

const userMapper = (users, separator) => users
  .map(user => user.split(separator))
  .map(user => ({
    id: user[0],
    name: user[1],
    userName: user[2],
  }));

const relevanceMapper = (relevances) => relevances
  .map(relevance => ({
    id: relevance,
  }))

const loadData = async(config) => {
  const userCollection = await getCollection('users');
  const highRelevanceCollection = await getCollection('highRelevance');
  const lessRelevanceCollection = await getCollection('lessRelevance');


  const userCount = await userCollection.countDocuments();
  const highRelevanceCount = await highRelevanceCollection.countDocuments();
  const lessRelevanceCount = await lessRelevanceCollection.countDocuments();


  if(!userCount) {
    const dataPrepared = prepareData(config.users.fileName);
    const mappedUsers = userMapper(dataPrepared, config.users.separator);
    await userCollection.insertMany(mappedUsers, { autoIndexId: false });
  }
  if(!highRelevanceCount) {
    const dataPrepared = prepareData(config.relevance.high.fileName)
    const mappedHighRelevance = relevanceMapper(dataPrepared);
    await highRelevanceCollection.insertMany(mappedHighRelevance);
  }
  if(!lessRelevanceCount) {
    const dataPrepared = prepareData(config.relevance.less.fileName)
    const mappedLessRelevance = relevanceMapper(dataPrepared);
    await lessRelevanceCollection.insertMany(mappedLessRelevance);
  }

  return;
}

module.exports = {
  loadData,
}