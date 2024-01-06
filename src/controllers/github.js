const apiGitHubService = require('../services/github')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const getRepository = async (req, res) => {
  const result = await apiGitHubService.getRepo()
  console.log(result)
  return res.status(200).send(result)
}

module.exports = {
  getRepository
}
