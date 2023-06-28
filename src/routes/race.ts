import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/all-races/:year', controllers.raceController.getAllRaces);
router.get('/race/:raceId(*)', controllers.raceController.getInformationRace);

export default router;