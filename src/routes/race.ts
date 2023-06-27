import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/all-race/:year', controllers.raceController.getAllRace);
router.get('/race/:year/:key(*)', controllers.raceController.getInformationRace);

export default router;