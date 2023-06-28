import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/all-driver/:year', controllers.driverController.getAllDriver);
router.get('/driver/:year/:key(*)', controllers.driverController.getInformationDriver);

export default router;