import { Request, Response } from 'express';
import services from '../services';

export default {
    getRankingTeam: async (req: Request, res: Response) => {
        console.log('Controller: Get ranking of team!');
        const year = req.query.year?.toString() || "2023";
        const team = req.query.name?.toString() || "";
        const data = await services.teamService.getRankingTeam(year, team);
        return res.status(data.statusCode).send(data.result);
    },
    getAllTeams: async (req: Request, res: Response) => {
        console.log('Controller: Get all teams!');
        const year = req.params.year;
        const data = await services.teamService.getAllTeams(year);
        return res.status(data.statusCode).send(data.result);
    },
    getInformationTeam: async (req: Request, res: Response) => {
        console.log('Controller: Get information of team!');
        const teamId = req.params.teamId;
        const data = await services.teamService.getInformationTeam(teamId);
        return res.status(data.statusCode).send(data.result);
    },
}