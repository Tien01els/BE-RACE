import express from 'express';
import controllers from '../controllers';
const router = express.Router();

router.get('/all-teams/:year', controllers.teamController.getAllTeams);
router.get('/team/:teamId(*)', controllers.teamController.getInformationTeam);

export default router;