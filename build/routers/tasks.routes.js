"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_controllers_1 = require("../controllers/tasks.controllers");
const router = express_1.default.Router();
router.post('/tasks', tasks_controllers_1.createTask);
router.get('/tasks/:id', tasks_controllers_1.getTaskById);
router.patch('/tasks/:id', tasks_controllers_1.updateTask);
router.delete('/tasks/:id', tasks_controllers_1.deleteTask);
exports.default = router;
