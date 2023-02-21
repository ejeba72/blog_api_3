const request = require('supertest');
const { app } = require('../../app');

describe('test for the edit route', () => {
  test('unauthorized get list request', async () => {
    const response = await request(app).get('/api/v1/edit');
    expect(response.status).toBe(401);
  }, 0)
})


describe('Authorized access to edit route', () => {
  beforeAll( async () => {
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })

    const token = loginResponse.body.token;
  }, 0)

  test('get list request', async () => {
    const response = await request(app)
      .get('/api/v1/edit')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  }, 0)
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// PLEASE NOTE: Supertest is used to make requests. Hence, it is suitable to assign it the variable name "request". Also, notice the relationship between "request" and "response" in the tests below.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const { config } = require('dotenv');
// const { disconnect } = require('mongoose');

// config();

// const DB_URI = process.env.DB_URI;

// async function disconnectDB(DB_URI) {
//   try {
//     await disconnect(DB_URI);
//     console.log('MongoDB is disconnected');
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// afterAll( () => {
//   disconnectDB();
// })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// describe('test for the edit route', () => {
//   test('testing the get list endpoint', async () => {
//     const response = await request(app).get('/api/v1/edit');
//     expect(response.status).toBe(401);
//   }, 70000)
// })

//     "test": "jest --coverage --detectOpenHandles"

// describe('test for the edit route', () => {
//   test('unauthorized get list request', async () => {
//     const response = await request(app).get('/api/v1/edit');
//     expect(response.status).toBe(401);
//   }, 0)
// })