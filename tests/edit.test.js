const request = require('supertest');
const { app } = require('../app')

// PLEASE NOTE: Supertest is used to make requests. Hence, it is suitable to assign it the variable name "request". Also, notice the relationship between "request" and "response" in the tests below.


describe('test for the edit route', () => {
  test('testing the get list endpoint', async () => {
    const response = await request(app).get('/api/v1/edit');
    expect(response.status).toBe(200);
  }, 70000)
})