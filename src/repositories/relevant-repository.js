const databaseHelper = require('../database/helper')
const COLLECTION_NAME_HIGH_RELEVANCE = 'highRelevance';
const COLLECTION_NAME_LESS_RELEVANCE = 'lessRelevance';

module.exports = {
  getMostRelevantList: async() => {
    const collection = await databaseHelper.getCollection(COLLECTION_NAME_HIGH_RELEVANCE);
    const highRelevantList = collection.find({});
    return highRelevantList;
  },
  getLessRelevantList: async() => {
    const collection = await databaseHelper.getCollection(COLLECTION_NAME_LESS_RELEVANCE);
    const lessRelevantList = collection.find({});
    return lessRelevantList;
  },
  hasUserInMostRelevantList: async(id) => {
    const data = await databaseHelper.getCollection(COLLECTION_NAME_HIGH_RELEVANCE);
    const findedData =  await data.find({ id })

    return !!findedData;
  },
  hasUserInLessRelevantList: async(id) => {
    const data = await databaseHelper.getCollection(COLLECTION_NAME_LESS_RELEVANCE);
    const findedData =  await data.find({ id })

    return !!findedData;
  },
};