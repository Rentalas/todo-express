import { Router, static as _static } from 'express';

export const route = Router();

route.use(_static('login/static'));
route.post('/', (req, res) => {
    res.redirect('./tasks.html');
})

