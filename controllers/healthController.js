function getHealthLogic (req, res) {
  try {
    console.log(`health check request`);
    res.send(`server is in good health ;)`);
  } catch (err) {
    console.log('err.message');
    res.send('err.message');
  }
}

module.exports = { getHealthLogic }