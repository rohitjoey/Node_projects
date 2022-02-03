const Task = require("../models/taskSchema");

const asyncWrapper = require("../middleware/async");

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json(error.message);
//     // console.log(error);
//   }
// };

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });

//     // const task = await Task.findById(req.params.id);
//     if (!task) {
//       return res.status(404).json(`No task with id : ${taskID}`);
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  // const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json(`No task with id : ${taskID}`);
  }
  res.status(200).json({ task });
});

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     // const task = await Task.findOne({ _id: taskID });

//     // if (task) {
//     //   await Task.deleteOne({ _id: taskID });
//     // } else {
//     //   return res.status(404).json(`No task with id : ${taskID}`);
//     // }
//     const task = await Task.findOneAndDelete({ _id: taskID });
//     if (!task) {
//       return res.status(404).json(`No task with id : ${taskID}`);
//     }

//     res.status(200).json(`Task deleted successfully`);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // const task = await Task.findOne({ _id: taskID });

  // if (task) {
  //   await Task.deleteOne({ _id: taskID });
  // } else {
  //   return res.status(404).json(`No task with id : ${taskID}`);
  // }
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json(`No task with id : ${taskID}`);
  }

  res.status(200).json(`Task deleted successfully`);
});

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).json(`No task with id : ${taskID}`);
//     }

//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json(`No task with id : ${taskID}`);
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
