const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('should signup a new user', async () => {
  const response = await request(app)
    .post('/users')
    .send({
      name: 'Itamar',
      email: 'itamar3@test.com',
      password: 'MyPass777!',
    })
    .expect(201);

  //Assert that the database has been changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  //Assertion about the response
  expect(response.body).toMatchObject({
    user: { name: 'Itamar', email: 'itamar3@test.com' },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe('MyPass777!');
});

test('should login existing user', async () => {
  const response = await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password,
  });

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
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

test('should fetch profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('should not get profile for unauthenticated user', async () => {
  await request(app).get('/users/me').send().expect(401);
});

test('should delete a user', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test('should not delete user for unauthenticated user', async () => {
  await request(app).delete('/users/me').send().expect(401);
});

test('should update a user', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({ name: 'Jane Doe' })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.name).toEqual('Jane Doe');
});

test('should update a user', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({ location: 'Philadelphia' })
    .expect(400);
});

test('should not user user for unauthenticated user', async () => {
  await request(app).patch('/users/me').send({ name: 'Jane Doe' }).expect(401);
});

test('should upload avatar image', async () => {
  await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/avatar.png')
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

//Extra User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated
