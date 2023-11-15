import express from 'express';
import { route } from './login/login';

export const server = express();
const port = 4000;

server.listen(port, () => console.log('Server is up!'));

server.use(express.static('static/front'));

server.use('/login', route);
