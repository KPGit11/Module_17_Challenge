import { Router } from 'express';
import { headCount, grade } from '../../controllers/studentController.js';

const router = Router();

router.route('/').get(headCount);
router.route('/:studentId').get(grade);

export default router;
