import express, {Request, Response, json} from 'express';
import ingredientsRouter from './routes/ingredients'
import { connect } from 'mongoose';


connect('mongodb://localhost:27017/paw-snack')

const app = express()
app.use(json());
const port =3001

app.use('/ingredients', ingredientsRouter)

app.get('/', (req: Request, res: Response) =>{
    res.send('hello world')
})

app.listen(port,()=>{
console.log(`example app on port ${port}`)
})