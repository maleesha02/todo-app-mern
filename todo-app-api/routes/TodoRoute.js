const express = require('express');
const router = express.Router();
const TodoController = require('../controller/TodoController');
const middleware = require('../middlewares/Middleware');

router.post('/create',middleware, userController.createTodo);
router.post('/pending',middleware, userController.findAllPendingTodos);
router.post('/completed',middleware, userController.findAllPendingTodos);
router.post('/find-by-id/:id',middleware, userController.findTodoByID);
router.post('/update-status/:id',middleware, userController.updateTodoStatus);
router.post('/update-content/:id',middleware, userController.updateTodoContent);
router.post('/delete-by-id/:id',middleware, userController.deleteTodoByID);

module.exports = router;