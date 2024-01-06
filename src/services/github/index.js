const apiGitHub = require('./client')

const getRepo = async () => {  

  try {
    const result = await apiGitHub.request("GET /repos/{owner}/{repo}/commits", {
      owner: "CPure",
      repo: "FullTimeForce",
    })
    return result.data
  } catch (e) {
    if (e.response?.status !== 200) {
      return e.response.data.message
    }
    throw e
  }
}
module.exports = {
  getRepo
}
