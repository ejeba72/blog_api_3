const request = require('supertest');
const { app } = require('../app');

// async function cleanUpDatabase() {
//   const response = await request(app).delete('/api/v1/users/savedUser._id')
// }

// afterAll( async () => {
//   const response = await request(app).delete('/api/v1/users/savedUser._id')
// })


/**
 * UNKNOWN TEST BUG:
 * I'm a bit confused here. When I run my test, the signup test will successfully created a new user. But the received response.status is 400, instead of the expected 201 status. Furthermore, the delete test will successfully delete a user account from my MongoDB database. But the received response.status in the test result, is 404, instead of the expected 200 status.
 * consequently, I end up having two failed tests, when these two tests have effectively passed (considering that the purpose of the routes has been achieved).
 */


describe('Endpoint tests for the user route', () => {
  test('Signup endpoint: test should successfully register a new user', async () => {
    const response = await request(app).post('/api/v1/users/signup').send({
      "firstName": "Obehi",
      "lastName": "Osazuwa",
      "email": "obehiosazuwa@gmail.com",
      "password": "obehiosazuwa"
    })
    expect(response.status).toBe(201);
  }, 1000000)

  test('Login endpoint: test should login a registered user', async () => {
    const response = await request(app).post('/api/v1/users/login').send({
        "email": "ruthabiola@gmail.com",
        "password": "ruth1234"
      })
    expect(response.status).toBe(200);
  }, 1000000)

  test('Logout endpoint: test should logout a user', async () => {
    const response = await request(app).get('/api/v1/users/logout')
    expect(response.status).toBe(200);
  }, 1000000)

  test('Delete endpoint: test should delete a user account', async () => {
    const response = await request(app).delete('/api/v1/users/63f4e194e0fb3ed4350085fd')
    expect(response.status).toBe(200);
  }, 1000000)

  // const response = request(app).delete('/api/v1/users/savedUser._id')

})
