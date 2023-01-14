const { config } = require('dotenv');
const { healthRoute } = require('./routes/healthRoute');
const express = require('express');

const app = express();

// DOTENV CONFIG AND MONGODB CONNECTION
config()

const PORT = process.env.PORT

// MIDDLEWARE 
app.use('/', healthRoute)

app.listen(PORT, () => {
  console.log(`Server is attentively listening to request at port 1111`);
})