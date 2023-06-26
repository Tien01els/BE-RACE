import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});