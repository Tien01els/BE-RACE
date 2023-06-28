import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import route from './src/routes/index';

dotenv.config();

const app: Express = express();

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

route(app);