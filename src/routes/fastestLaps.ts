import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/fastest-laps/:year', controllers.fastestLapsController.getFastestLaps);

export default router;