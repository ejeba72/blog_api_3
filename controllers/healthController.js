function getHealthLogic (req, res) {
  console.log(`health check request`)
  res.send(`server is in good health ;)`)
}

module.exports = { getHealthLogic }