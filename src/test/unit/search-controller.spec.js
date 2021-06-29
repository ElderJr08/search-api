
const searchController = require('../../controllers/search-controller')
const { ServerError } = require('../../errors')

let mockDependencies;

describe('Unit tests for search controller', () => {
  beforeEach(() => {
    mockDependencies = {
      repository: {
        getUsers: () => Promise.resolve([{ id: '1', name: 'Elder', userName: 'ze'}]),
      },
    }
  });

  it('should return 200 OK with page response keys', async() => {  
    const { repository } = mockDependencies

    const request = { 
      query: {}, 
    }

    const search = searchController(repository);
  
    const response = await search.handle(request);
  
    expect(response.statusCode).toBe(200)
    expect(Object.keys(response.body).sort()).toEqual([
      'from',
      'size',
      'data',
    ].sort())
  });

  it('should return 500 server error, when getUsers thrown an error', async() => {  
    const { repository } = mockDependencies
    const request = { 
      query: {}, 
    }

    jest.spyOn(repository, 'getUsers')
      .mockImplementationOnce(() => { throw new Error() })

    const search = searchController(repository);
  
    const response = await search.handle(request);
  
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())

  });
});