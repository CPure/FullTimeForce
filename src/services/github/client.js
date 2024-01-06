const { Octokit, App } = require("octokit");

const octokit = new Octokit({ 
  auth: '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'
});

module.exports = octokit