import express from "express";
import * as TodoController from "../controllers/todo.controller";

const router = express.Router();

router.get("/", TodoController.getAll);
router.get("/:id", TodoController.get);
router.post("/", TodoController.create);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.remove);

export default router;
