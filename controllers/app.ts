import express from 'express';
import userRoute from './userController.ts';
import movieRoute from './movieController.ts';
import reviewRoute from './reviewController.ts';

const app = express();
const port = 1308;

//TODO:
// Retirar ERRManagement do prisma e passar para o JS de forma que o programa nao crashe
// Quando dar fetch em reviews, devolver usuario e filme relacionados, nao so ID
// Autenticacao para criar/deletar reviews no nome de usuario X com senha X
// Checar NULLS

//Middleware e Routes
app.use(express.json());
app.use("/user", userRoute);
app.use("/movie", movieRoute);
app.use("/review", reviewRoute);

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})