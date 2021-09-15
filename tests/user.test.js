const request = require('supertest');
const app = require('../src/app');

test('should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Itamar',
      email: 'itamar3@test.com',
      password: 'MyPass777!',
    })
    .expect(201);
});
