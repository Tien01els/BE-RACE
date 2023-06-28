import { Request, Response } from 'express';
import services from '../services';

export default {
    getAllDrivers: async (req: Request, res: Response) => {
        console.log('Controller: Get all drivers!');
        const year = req.params.year;
        const data = await services.driverService.getAllDrivers(year);
        return res.status(data.statusCode).send(data.result);
    },
    getInformationDriver: async (req: Request, res: Response) => {
        console.log('Controller: Get information of driver!');
        const driverId = req.params.driverId;
        const data = await services.driverService.getInformationDriver(driverId);
        return res.status(data.statusCode).send(data.result);
    },
}