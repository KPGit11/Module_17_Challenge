import { Router } from 'express';
import studentRoutes from '../routes/api/studentRoutes';

const router = Router();
router.use('/students', studentRoutes);

export default router;
