async function getListLogic(req, res) {
  console.log('get list request')
  res.send(`hello, world`)
}

module.exports = { getListLogic }