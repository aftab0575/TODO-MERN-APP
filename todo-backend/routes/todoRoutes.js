import { Router } from 'express';
const router = Router();
import authMiddleware from '../middleware/authMiddleware.js';
import { getTodos, addTodo, updateTodo, toggleTodo, deleteTodo } from '../controllers/todoController.js';

// All routes are protected
router.use(authMiddleware);

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.patch('/toggle/:id', toggleTodo);
router.delete('/:id', deleteTodo);

export default router;
