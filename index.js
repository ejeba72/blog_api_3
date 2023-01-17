const express = require('express');
const { config } = require('dotenv');
const { healthRoute } = require('./routes/healthRoute');
const { generalRoute } = require('./routes/generalRoute');

// DOTENV CONFIG AND MONGODB CONNECTION
config()

const app = express();
const PORT = process.env.PORT;
const apiV1 = '/api/v1';

// MIDDLEWARE 
app.use('/', healthRoute)
app.use(`${apiV1}/general`, generalRoute)

app.listen(PORT, () => {
  console.log(`Server is attentively listening to request at port ${PORT}`);
})