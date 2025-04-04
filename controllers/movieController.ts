import express from 'express';
import { addMovie } from '../usecases/addMovie.ts';
import { getMovie } from '../usecases/getMovie.ts';
import { deleteMovie } from '../usecases/deleteMovie.ts';

const router = express.Router();

router.post('/addMovie', async (req, res) => {
    const { title } = req.body;

    try {
        await addMovie(title);
        res.status(200).send(`Movie ${title} registered with success`);
    }
    catch(err) {
        res.status(err).send(`Movie ${title} could not be registered`);
    }
});

router.get('/getMovie', async (req, res) => {
    const { title } = req.body;

    try {
        const result = await getMovie(title);
        res.status(200).send(result);
    }
    catch(err) {
        res.status(err).send(`Movie ${title} could not be fetched`);
    }
});

router.delete('/deleteMovie', async (req, res) => {
    const { title } = req.body;

    try {
        await deleteMovie(title);
        res.status(200).send(`Movie ${title} deleted with success`);
    }
    catch(err) {
        res.status(err).send(`Movie ${title} deleted with success`);
    }
});

export default router;