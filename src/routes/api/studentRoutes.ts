import { Router } from 'express';
import { headCount, grade } from '../../controllers/studentController.js';

const sudentRoutes = Router();

sudentRoutes.route('/').get(headCount);
sudentRoutes.route('/:studentId').get(grade);

export default sudentRoutes;
