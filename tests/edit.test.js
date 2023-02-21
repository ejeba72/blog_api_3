const request = require('supertest');
const { app } = require('../app');

/** 
 * So, after a spirited effort, I have finally managed to be able to set up a test for a protected route. I have been on this for about a week now! 
 * 
 * I know that my approach is not the best. But I want to learn the basics first. And then learn why the most "straight forward" approach is not optimal. 
 * 
 * For me, integration testing is "straight forward" when I go about it using the actual logic I wrote for the various endpoints, as opposed to creating a mock or such. 
 * 
 * This so-called "straight forward" approach helps my basic understanding of integration testing, because, it is as if I'm writing code to replace or substitute postman or thunder client. 
 * 
 * That is to say, I use the thought process of testing my endpoints with postman or thunder client to aid me in writing an integration test for my endpoints.
 * 
 * Hence the reason for my "un-ideal" approach. Because it is helping me to better appreciate integration testing. It is when I achieve my aim of adopting my approach that I can then appreciate the necessity of the ideal or optimal approach of using a mock or such.
 * 
 * Furthermore, I tried using the "beforeAll" method to login, such that I can use the token generated during the login process in my tests. But, I got frustrated so many times. 
 * 
 * One of the errors I kept getting was, "ReferenceError: token is not defined". And I tried different things, yet couldn't resolve the error.
 * Finally, I thought I should improvise my own approach and dump the "beforeAll" method. And guess what? It worked!!! HURRAY!!!
 * 
 * Nonetheless, when I tried to create a function for my approach such that I could just call the funtion for every test on a protected endpoint, I got the following error: 
 * 
 * "ReferenceError: You are trying to `import` a file after the Jest environment has been torn down. From tests/edit.test.js."
 * 
 * Consequently, I had to re-write the block of code for login, in every test. But, I know sey I go eventually understand why e no work, wetin "tear down" mean and every other thing wen I need to understand to become more proficient.
 */


describe('Authorized access to edit route', () => {
  // // beforeAll( async () => {
  // //   const loginResponse = await request(app).post('/api/v1/users/login').send({
  // //     "email": "ruthabiola@gmail.com",
  // //     "password": "ruth1234"
  // //   })

  // //   const token = loginResponse.body.token;
  // //   console.log(token);

  // //   return token;

  // // }, 1000000)

  // // async function login() {
  // //   const loginResponse = await request(app).post('/api/v1/users/login').send({
  // //     "email": "ruthabiola@gmail.com",
  // //     "password": "ruth1234"
  // //   })
  // //   const token = loginResponse.body.token;
  // //   console.log(token);
  // // }

  test('getList endpoint: test should request for a list of blogs the user has written.', async () => {
    // login();
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })
    const token = loginResponse.body.token;
    console.log(token);

    const response = await request(app)
      .get('/api/v1/edit')
      .set('Authorization', 'Bearer ' + token);

    expect(response.status).toBe(200);
  }, 1000000)

  test('post endpoint: test should send a post request of a newly composed blog', async () => {
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })
    const token = loginResponse.body.token;
    console.log(token);

    const response = await request(app)
      .post('/api/v1/edit')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "title": "lovely day",
        "tags": [ "pidgin", "Benin", "Warri" ],
        "author": "...child of nobody",
        "state": "published",
        "body": "Salama leku. Na wa for Wire road o! Na God go help us. Everywhere stew mean sey, everywhere good. body na body na! Before kor! Abi you wan change am!"
      });

    // expect(response.status).toBe(201);
    expect(response.status).toBe(201);
  }, 1000000) 

  test('put endpoint: test should update a blog with specified id.', async () => {
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })
    const token = loginResponse.body.token;
    console.log(token);

    const response = await request(app)
      .put('/api/v1/edit/63d6087ff25df1b00868d262')
      .set('Authorization', `Bearer ${token}`)
      .send({
        state: 'draft',
        author: 'Omosede'
      });
      // console.log(response);
    expect(response.status).toBe(200);
  }, 1000000)

  test('delete endpoint: test should delete blog with specified id', async () => {
    const loginResponse = await request(app).post('/api/v1/users/login').send({
      "email": "ruthabiola@gmail.com",
      "password": "ruth1234"
    })
    const token = loginResponse.body.token;
    console.log(token);

    const response = await request(app)
      .delete('/api/v1/edit/63f512a19bb49a7c016951ca')
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200);
  }, 1234567)

})


// I no longer think that this set of unauthorized tests is necessary. Or is it? Well, I'm not fully convinced though. If I'm wrong, I'll eventually realise it.

// describe('', () => {
//   test('unauthorized get list request', async () => {
//     const response = await request(app).get('/api/v1/edit');
//     expect(response.status).toBe(401);
//   })
// })