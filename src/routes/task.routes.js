import { Router } from "express"
import  { getTask, getTasks, createTask, updateTask, deleteTask} from "../controllers/task.controllers.js" 
import { requireAuth } from "../middlewares/tokenValidation.js";


const router = Router();

router.get('/tasks', requireAuth,  getTasks);
router.get('/task/:id', requireAuth, getTask);
router.post('/task', requireAuth, createTask);
router.put('/task/:id', requireAuth, updateTask);
router.delete('/task/:id', requireAuth, deleteTask)

export default router;