/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const get = async (req, res) => {
  const result = { name: 'carlos' }
  console.log(result)
  return res.status(200).send(result)
}

module.exports = {
  get
}
