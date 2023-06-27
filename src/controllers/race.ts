import { Request, Response } from 'express';
import services from '../services';

export default {
    getAllRace: async (req: Request, res: Response) => {
        console.log('Controller: Get all races!');
        const year = req.params.year;
        const data = await services.raceService.getAllRace(year);
        return res.status(data.statusCode).send(data.result);
    },
    getInformationRace: async (req: Request, res: Response) => {
        console.log('Controller: Get information of race!');
        const year = req.params.year;
        const key = req.params.key;
        const data = await services.raceService.getInformationRace(year, key);
        return res.status(data.statusCode).send(data.result);
    },
}