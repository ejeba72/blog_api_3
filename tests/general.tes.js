const request = require('supertest');
const { app } = require('../app');

describe('Endpoint tests for the general route', () => {
  test('Get list endpoint: should return a list of published blog posts', async () => {
    const response = await request(app).get('/api/v1/general');
    expect(response.status).toBe(200);
  }, 1000000)

  test('Get blog endpoint: should return blog post with the requested id', async () => {
    const response = await request(app).get('/api/v1/general/63d247f6083661b52c4e5a75');
    expect(response.status).toBe(200);
  }, 1000000)
})