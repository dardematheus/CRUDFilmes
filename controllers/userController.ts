import express from 'express';
import { addUser } from '../usecases/addUser.ts';
import { getUser } from '../usecases/getUser.ts' ;
import { deleteUser } from '../usecases/deleteUser.ts';

const router = express.Router();

router.post('/addUser', async (req, res) => {
    const { name } = req.body;
    const { password } = req.body 

    try {
        await addUser(name, password);
        res.status(200).send(`User ${name} registered with success `);
    }
    catch(err){
        res.status(err).send(`Cannot add user ${name}`);
    }
});

router.get('/getUser', async (req, res) => {
    const { name } = req.body;

    try {
        const result =  await getUser(name);
        res.status(200).send(result);
    }
    catch(err) {
        res.status(err).send(`Could not fetch ${name}`);
    }
});

router.delete('/deleteUser', async (req, res) => {
    const { name } = req.body;

    try {
        await deleteUser(name);
        res.status(200).send(`User ${name} deleted with success`);
    }
    catch(err) {
        res.status(err).send(`Could not fetch ${name}`);
    }
});

export default router;