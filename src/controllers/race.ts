import { Request, Response } from 'express';
import services from '../services';

export default {
    getAllRaces: async (req: Request, res: Response) => {
        console.log('Controller: Get all races!');
        const year = req.params.year;
        const data = await services.raceService.getAllRaces(year);
        return res.status(data.statusCode).send(data.result);
    },
    getInformationRace: async (req: Request, res: Response) => {
        console.log('Controller: Get information of race!');
        const raceId = req.params.raceId;
        const data = await services.raceService.getInformationRace(raceId);
        return res.status(data.statusCode).send(data.result);
    },
}