/**
 *
 * @param {import('express').Express} app
 */
const setupRoutes = (app) => {
  app.use('/api/test', require('./test'))
}

module.exports = setupRoutes
