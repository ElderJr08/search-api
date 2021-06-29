const { connect, disconnect, getCollection } = require('../../database/helper')

describe('Database Helper', () => {
  beforeAll(async () => {
    await connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await disconnect()
  })

  it('should reconnect if mongodb is down', async () => {
    let usersCollection = await getCollection('users')
    expect(usersCollection).toBeTruthy()
    await disconnect()
    usersCollection = await getCollection('users')
    expect(usersCollection).toBeTruthy()
  })
})
