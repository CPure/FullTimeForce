const apiGitHubService = require('../services/github')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const getRepository = async (req, res) => {
  const {name} = req.query
  const result = await apiGitHubService.getRepo(name)
  return res.status(200).send(result)
}

module.exports = {
  getRepository
}
