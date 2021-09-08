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
    //   .updateOne(
    //     { _id: new ObjectID('6138ff9f4a53287ccf1b0dfd') },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    db.collection('users')
      .deleteMany({ age: 27 })
      .then(result => console.log(result))
      .catch(error => console.log(error));

    db.collection('users')
      .deleteOne({ name: 'Yonatan' })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
);
