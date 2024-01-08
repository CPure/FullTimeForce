const { Octokit } = require("octokit");
const { createTokenAuth } = require('@octokit/auth-token');

const client_secret = 'e406eef7644b2bd0457647f96f528c96ff0b0ef5'
const client_id ='2b609d658f07929caf6a'

const auth = createTokenAuth(client_id,client_secret);
let token = "";
auth()
  .then(authData => {
    token= authData.token
  })
  .catch(error => {
    console.error(error.message)
  });
const octokit = new Octokit({ 
  auth: token
})
module.exports = octokit