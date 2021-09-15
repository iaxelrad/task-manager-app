const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'John Doe',
  email: 'john@example.com',
  password: '56What!!!',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

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

test('should login existing user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password,
  });
});

test('should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: 'nonExistentUser',
    })
    .expect(400);
});
