import { Express } from 'express';
import raceRouter from './race';
import driverRouter from './driver';
import teamRouter from './team';
import fastestLapsRouter from './fastestLaps';

const vitualPath = '/api'
export default (app: Express) => {
    app.use(vitualPath, raceRouter);
    app.use(vitualPath, driverRouter);
    app.use(vitualPath, teamRouter);
    app.use(vitualPath, fastestLapsRouter);
};