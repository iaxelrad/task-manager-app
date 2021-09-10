require('../src/db/mongoose');
const Task = require('../src/models/task');

const deleteTaskAndCount = async id => {
  const deletedTask = await Task.findByIdAndDelete(id);
  const userCount = await Task.countDocuments({ completed: false });
  return userCount;
};

deleteTaskAndCount('613af6e39387b66477676936')
  .then(userCount => console.log(userCount))
  .catch(e => console.log(e));
