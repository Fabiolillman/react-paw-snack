import express, {Request, Response, json} from 'express';
import ingredientsRouter from './routes/ingredients'
import categoryRouter from './routes/category'
import { connect } from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

// connect('mongodb://localhost:27017/paw-snack')
// connect('mongodb+srv://paw-snack:1cXtHgQRPKzmHAgX@cluster0.bk541.mongodb.net/paw-snack?retryWrites=true&w=majority')
connect(`${process.env.MONGO_DB_CONNECTION_STRING}`)

const app = express()
app.use(json());
app.use(cors());

const port =process.env.PORT || 3001

app.use('/ingredients', ingredientsRouter)
app.use('/category', categoryRouter)


app.get('/', (req: Request, res: Response) =>{
    res.send('hello world')
})

app.listen(port,()=>{
console.log(`example app on port ${port}`)
})