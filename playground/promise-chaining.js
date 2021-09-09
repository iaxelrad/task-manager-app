require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// // 613a6f85f89ab755aeba8a6f
// User.findByIdAndUpdate('613919d1037da404388ea04e', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(userCount => {
//     console.log(userCount);
//   })
//   .catch(e => console.log(e));

//   const User = require('../src/models/user');

// 613a6f85f89ab755aeba8a6f
Task.findByIdAndDelete('613a7207fde149570f81dd04')
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(userCount => {
    console.log(userCount);
  })
  .catch(e => console.log(e));
