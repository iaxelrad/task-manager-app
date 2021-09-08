//CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Itamar',
    //     age: 31,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     { name: 'Jen', age: 28 },
    //     { name: 'Gunther', age: 27 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        { description: 'Installed mongoDB on macbook', completed: true },
        { description: 'Set up the new task manager app', completed: true },
        { description: 'Finished udemy node.js course', completed: false },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents');
        }

        console.log(result.ops);
      }
    );
  }
);
