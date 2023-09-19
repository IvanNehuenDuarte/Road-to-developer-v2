import Task from "../models/Task";

export const renderTask = async (req, res) => {
  try {
    const tasks = await Task.find().lean();

    console.log(tasks);

    res.render("index", { tasks });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  const task = Task(req.body);

  const taskSave = await task.save();

  console.log(taskSave);

  res.redirect("/");
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

export const taskToogleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
