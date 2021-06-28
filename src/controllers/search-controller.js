const DEFAULT_FROM_PAGE = 0;
const DEFAULT_SIZE_PAGE = 15;

const searchController = (
  repository,
) => {

  const handle = async({ query }) =>{
    const from = parseInt(query?.from) || DEFAULT_FROM_PAGE;
    const size = parseInt(query?.size) || DEFAULT_SIZE_PAGE;

    const users = await repository.getUsers({
      from: from + 1,
      size,
      term: query?.query,
    });

    const pageResponse = {
      from,
      size, 
      data: users, 
    }

    return {
      body: pageResponse,
      statusCode: 200,
    };
  }

  return {
    handle,
  }
};

module.exports = searchController;