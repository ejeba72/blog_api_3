const express = require('express');
const { connect, connection } = require('mongoose');
const { config } = require('dotenv');
const { healthRoute } = require('./routes/healthRoute');
const { generalRoute } = require('./routes/generalRoute');

// DOTENV CONFIG AND MONGODB CONNECTION
config()

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
const apiV1 = '/api/v1';

// MONGOOSE CONNECTION
mongoDB().catch(err => console.log(err));

async function mongoDB() {
  await connect(DB_URI);
}

connection.on('connected', () => {
  console.log('MongoDB is connected')
})


// MIDDLEWARE 
app.use('/', healthRoute)
app.use(`${apiV1}/general`, generalRoute)

app.listen(PORT, () => {
  console.log(`Server is attentively listening to request at port ${PORT}`);
})