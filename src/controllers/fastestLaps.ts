import { Request, Response } from 'express';
import services from '../services';

export default {
    getFastestLaps: async (req: Request, res: Response) => {
        console.log('Controller: Get fastest lap award!');
        const year = req.params['year'];
        const data = await services.fastestLapsService.getFastestLaps(year);
        return res.status(data.statusCode).send(data.result);
    },
}