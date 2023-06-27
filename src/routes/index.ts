import { Express } from 'express';
import raceRouter from './race';

const vitualPath = '/api'
export default (app: Express) => {
    app.use(vitualPath, raceRouter);
};