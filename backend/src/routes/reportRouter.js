import { Router } from 'express';
import { submitReport } from '../controllers/reportController.js';

const reportRouter = Router();

reportRouter.post('/', submitReport);

export default reportRouter;