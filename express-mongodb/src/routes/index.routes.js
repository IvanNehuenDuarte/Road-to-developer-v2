import { Router } from "express";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToogleDone,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", renderTask);

router.post("/task/add", createTask);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toogleDone", taskToogleDone);

export default router;
