const request = require('supertest');
const { app } = require('../../app');

// describe('', () => {
//   test('unauthorized get list request', async () => {
//     const response = await request(app).get('/api/v1/edit');
//     expect(response.status).toBe(401);
//   }, 0)
// })


// describe('Authorized access to edit route', () => {
//   beforeAll( async () => {
//     const loginResponse = await request(app).post('/api/v1/users/login').send({
//       "email": "ruthabiola@gmail.com",
//       "password": "ruth1234"
//     })

//     const token = loginResponse.body.token;
//   }, 0)

//   test('get list request', async () => {
//     const response = await request(app)
//       .get('/api/v1/edit')
//       .set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//   }, 0)
// })













const {MongoClient} = require('mongodb');

describe('test for the edit route', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});











// const {MongoClient} = require('mongodb');

// describe('test for the edit route', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = {_id: 'some-user-id', name: 'John'};
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });









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
