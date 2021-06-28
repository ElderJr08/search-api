const adaptRoute = (controller) => {
  return async(req, res) => {
    const response = await controller.handle(req);
    res.status(response.statusCode).json(response.body)
  }
}

module.exports = adaptRoute;