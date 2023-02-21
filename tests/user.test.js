const request = require('supertest');
const {} = require('../app');

describe('Endpoint tests for the user route', () => {
  test('Login endpoint: should login a registered user', async () => {
    const response = await request(app).post('/api/v1/users/login').send({
        "email": "ruthabiola@gmail.com",
        "password": "ruth1234"
      })
    expect(response.status).toBe(200);
  }, 1000000)
})