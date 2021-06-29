const { ok, serverError } = require('../helpers/http-helpers')

const DEFAULT_FROM_PAGE = 0;
const DEFAULT_SIZE_PAGE = 15;

const searchController = (
  repository,
) => {

  const handle = async({ query }) =>{
    try {
      const from = parseInt(query?.from) || DEFAULT_FROM_PAGE;
      const size = parseInt(query?.size) || DEFAULT_SIZE_PAGE;
  
      const users = await repository.getUsers({
        from: from + 1,
        size,
        term: query?.query,
      });
  
      const pageResponse = {
        from,
        size: users.length, 
        data: users, 
      }
  
      return ok(pageResponse);
      
    } catch (error) {
      console.log(error);
      return serverError()
    }
  }

  return {
    handle,
  }
};

module.exports = searchController;