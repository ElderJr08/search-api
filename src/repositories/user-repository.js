const databaseHelper = require('../database/helper')
const COLLECTION_NAME_USERS = 'users';

module.exports = {
  getUsers: async(query) => {
    const contains = RegExp(query.term, 'i');

    const options = {
      projection: { _id: 0, priority: 0 },
    }

    const filter = {
      $or: [
        { name: contains },
        { userName: contains },
      ],
    };

    const collection = await databaseHelper.getCollection(COLLECTION_NAME_USERS);
    const users = await collection
      .find(query?.term ? filter : {}, options)
      .skip( query.from > 0 ? ( ( query.from - 1 ) * query.size ) : 0 )
      .limit( query.size )
      .sort(query?.term ? { priority: -1 } : {})
      .toArray()
      
    return users
  },
  getUserById: async(id) => {
    const collection = await databaseHelper.getCollection(COLLECTION_NAME_USERS);
    const users = await collection.findOne({ id })

    return users
  },
};