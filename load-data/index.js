const fs = require('fs');
const path = require('path');

const priorities = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
}

const { getCollection } = require('../src/database/helper');

const prepareData = (fileName) => {
  const filePath = path.resolve('data-to-load', fileName)

  const data = Buffer.from(fs.readFileSync(filePath)).toString()
  const rows = data.split(/\r\n/);

  return rows;
}

const loadData = async(config) => {
  const userCollection = await getCollection('users');
  const userCount = await userCollection.countDocuments();

  if(!userCount) {
    const userData = prepareData(config.users.fileName);
    const userHighRelevanceData = prepareData(config.relevance.high.fileName)
    const userLessRelevanceData = prepareData(config.relevance.less.fileName)

    const users =  userData
      .map(user => user.split(config.users.separator))
      .map(user => ({
        id: user[0],
        name: user[1],
        userName: user[2],
      }))
      .map(user => {
        if(!userHighRelevanceData.includes(user.id)) return user;
        return {
          ...user,
          priority: priorities.HIGH,
        }
      })
      .map(user => {
        if(!userLessRelevanceData.includes(user.id)) return { ...user, priority: priorities.LOW };
        return {
          ...user,
          priority: priorities.MEDIUM,
        }
      })

    await userCollection.insertMany(users, { autoIndexId: false });
  }
  return;
}

module.exports = {
  loadData,
}