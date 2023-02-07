const express = require('express');
const { config } = require('dotenv');
const { healthRoute } = require('./routes/healthRoute');
const { devRoute } = require('./routes/devRoute');
const { generalRoute } = require('./routes/generalRoute');
const { userRoute } = require('./routes/userRoute');
const { mongoDB } = require('./database/connection');
const { editRoute } = require('./routes/editRoute');

// DOTENV CONFIG AND MONGODB CONNECTION
config();
mongoDB();

const app = express();
const PORT = process.env.PORT;
const apiV1 = '/api/v1';

// MIDDLEWARE 
app.use(express.json());
app.use('/', healthRoute);
app.use('/dev', devRoute);  // For development purpose only
app.use(`${apiV1}/general`, generalRoute);
app.use(`${apiV1}/users`, userRoute);
app.use(`${apiV1}/edit`, editRoute)

module.exports = { app, PORT }