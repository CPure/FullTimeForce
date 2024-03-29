const apiGitHub = require('./client')

const getRepo = async (name) => {  
  try {
    const result = await apiGitHub.request("GET /repos/{owner}/{repo}/commits", {
      owner: "CPure",
      repo: name,
    })
    return result.data
  } catch (e) {
    console.log(e)
    if (e.response?.status !== 200) {
      return e.response.data.message
    }
    throw e
  }
}
module.exports = {
  getRepo
}
