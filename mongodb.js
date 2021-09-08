//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to task manager database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('6138f864555fb178a14f85be') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch user information');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log('Unable to fetch user information');
    //     }

    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 27 })
    //   .count((error, users) => {
    //     if (error) {
    //       return console.log('Unable to fetch user information');
    //     }

    //     console.log(users);
    //   });

    db.collection('tasks').findOne(
      { _id: new ObjectID('613900717372057d280550ea') },
      (error, user) => {
        if (error) {
          return console.log('Unable to fetch user information');
        }

        console.log(user);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, users) => {
        if (error) {
          return console.log('Unable to fetch user information');
        }

        console.log(users);
      });
  }
);
