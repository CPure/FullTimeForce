const { Octokit, App } = require("octokit");

const octokit = new Octokit({ 
  auth: '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'
});

module.exports = octokit