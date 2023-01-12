const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(`health check request`)
  res.send(`server is in good health ;)`)
})

app.listen(1111, () => {
  console.log(`Server is attentively listening to request at port 1111`);
})