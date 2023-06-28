import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/all-drivers/:year', controllers.driverController.getAllDrivers);
router.get('/driver/:driverId(*)', controllers.driverController.getInformationDriver);

export default router;