/**
 *
 * @param {import('express').Express} app
 */
const setupRoutes = (app) => {
  app.use('/api/github', require('./github'))
}

module.exports = setupRoutes
