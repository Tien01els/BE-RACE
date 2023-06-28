import { Express } from 'express';
import raceRouter from './race';
import driverRouter from './driver';

const vitualPath = '/api'
export default (app: Express) => {
    app.use(vitualPath, raceRouter);
    app.use(vitualPath, driverRouter);
};