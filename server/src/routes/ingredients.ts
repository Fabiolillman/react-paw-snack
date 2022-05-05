import express, {Request, Response} from 'express';
import { createIngredients } from '../db/ingredientsCrude';

const router = express.Router();

router.get('/', (req: Request, res: Response)=>{
    console.log("got here")
    res.send('get ingredients')
})

router.post('/', async (req: Request, res: Response)=>{
   const createdIngredients:any = await createIngredients(req.body);
   res.status(201).json(createdIngredients)
})

export default router