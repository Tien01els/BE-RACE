import { Request, Response } from 'express';
import services from '../services';

export default {
    getRankingDriver: async (req: Request, res: Response) => {
        console.log('Controller: Get ranking of driver!');
        const year = req.query.year?.toString() || "2023";
        const driver = req.query.name?.toString() || "";
        const data = await services.driverService.getRankingDriver(year, driver);
        return res.status(data.statusCode).send(data.result);
    },
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