const { Octokit, App } = require("octokit");

const octokit = new Octokit({ 
  auth: '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'
});

module.exports = octokit