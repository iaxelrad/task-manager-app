require('../src/db/mongoose');
const User = require('../src/models/user');

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

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const userCount = await User.countDocuments({ age });
  return userCount;
};

updateAgeAndCount('613919d1037da404388ea04e', 3)
  .then(userCount => console.log(userCount))
  .catch(e => console.log(e));
