import { Request, Response } from 'express';
import services from '../services';

export default {
    getAllDriver: async (req: Request, res: Response) => {
        console.log('Controller: Get all drivers!');
        const year = req.params.year;
        const data = await services.driverService.getAllDriver(year);
        return res.status(data.statusCode).send(data.result);
    },
    getInformationDriver: async (req: Request, res: Response) => {
        console.log('Controller: Get information of driver!');
        const year = req.params.year;
        const key = req.params.key;
        const data = await services.driverService.getInformationDriver(year, key);
        return res.status(data.statusCode).send(data.result);
    },
}