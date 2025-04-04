import express from 'express';
import { addUser } from '../usecases/addUser.ts';
import { getUser } from '../usecases/getUser.ts' ;
import { deleteUser } from '../usecases/deleteUser.ts';

const router = express.Router();

//Pega dados do usuario e envia para usecases/addUsers, prisma envia erros e interrompe servidor : CORRIGIR
router.post('/addUser', async (req, res) => {
    const { name } = req.body;
    const { password } = req.body 

    try {
        await addUser(name, password);
        console.log(`User ${name} registered with success`);
        res.status(200).send(`User ${name} registered with success `);
    }
    catch(err){
        console.log(`Cannot add user ${name}`);
        res.status(err).send(`Cannot add user ${name}`);
    }
});

//Busca o nome fornecido na database e retorna as informacoes relacionadas
router.get('/getUser', async (req, res) => {
    const { name } = req.body;

    try {
        const result =  await getUser(name);
        console.log(`User ${name} fetched with success`);
        res.status(200).send(result);
    }
    catch(err) {
        console.log(`Could not fetch ${name}`);
        res.status(err).send(`Could not fetch ${name}`)
    }
});

//Busca nome inputado e deleta usuario, so devolve o status
router.delete('/deleteUser', async (req, res) => {
    const { name } = req.body;

    try {
        await deleteUser(name);
        console.log(`User ${name} deleted with success`);
        res.status(200).send(`User ${name} deleted with success`);
    }
    catch(err) {
        console.log(`Could not delete ${name}`);
        res.status(err).send(`Could not fetch ${name}`);
    }
});

export default router;