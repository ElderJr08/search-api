const { connect, disconnect, getCollection } = require('../../database/helper');
const userRepository = require('../../repositories/user-repository');

describe('User Repository', () => {
  beforeAll(async () => {
    await connect(process.env.MONGO_URL)
    const userCollection = await getCollection('users');

    await userCollection.insertMany([{
      id: 1,
      name: 'Elder Junior',
      userName: 'elder.junior',
      priority: 3,
    },
    {
      id: 1,
      name: 'Elias',
      userName: 'elias',
      priority: 2,
    }]);
  })
    
  afterAll(async () => {
    await disconnect()
  })

  it('should return a users acoording term and sort by priority', async () => {
    const repository = userRepository;
    const [users] = await repository.getUsers({
      from: 0,
      size: 2,
      term: 'el',
    });

    expect(users).toBeTruthy();
    expect(users.id).toBeTruthy()
    expect(users.name).toBe('Elder Junior')
    expect(users.userName).toBe('elder.junior')
    console.log(users)
  });

  it('should return users without query term', async () => {
    const repository = userRepository;
    const users = await repository.getUsers({
      from: 1,
      size: 15,
    });

    expect(users).toBeTruthy();
    expect(users).toHaveLength(2)
    console.log(users)
  });
});