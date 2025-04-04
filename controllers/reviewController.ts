import { deleteReview } from '../usecases/deleteReview.ts';
import { addReview } from '../usecases/addReview.ts';
import { getReview } from '../usecases/getReview.ts';
import express from 'express';

const router = express.Router();

router.post('/addReview', async (req, res) => {
    const { comment, rating, movie, user } = req.body;

    try {
        await addReview(comment, rating, movie, user);
        res.status(200).send(`Review added with success`);
    }
    catch(err) {
        console.log(`Cannot add review`);
        res.status(err).send(`Cannot add review`);
    }
});

router.get('/getReview', async (req, res) => {
    const { id, user, movie } = req.body;

    try {
        const review = await getReview(id, user, movie);
        res.status(200).send(review);
    } 
    catch(err) {
        console.log(`Cannot get review`);
        res.status(err).send(`Cannot get review`);
    }
});

router.delete('/deleteReview', async (req, res) => {
    const { id } = req.body;

    try {
        await deleteReview(id);
        res.status(200).send(`Review deleted with success`);
    }
    catch(err) {
        console.log(`Cannot delete review`);
        res.status(err).send(`Cannot delete review`);
    }
})

export default router;