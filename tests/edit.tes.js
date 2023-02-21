const request = require('supertest');
const { app } = require('../app');

describe('', () => {
  test('unauthorized get list request', async () => {
    const response = await request(app).get('/api/v1/edit');
    expect(response.status).toBe(401);
  })
})


describe('Authorized access to edit route', () => {
  beforeAll( async () => {
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })

    const token = loginResponse.body.token;
    // console.log(token);
  })

  test('get list request', async () => {
    const response = await request(app)
      .get('/api/v1/edit')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  })
})
