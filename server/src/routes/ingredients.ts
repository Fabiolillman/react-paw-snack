import express, {Request, Response} from 'express';
import {  getIngredients, getIngredientsId, getReceptSearch, postNewRating } from '../db/ingredientsCrude';

const router = express.Router();

router.get('/', async (req: Request, res: Response)=>{
    console.log("got here")
    const ingredientsList = await getIngredients()
    res.json(ingredientsList)
})

router.get('/:ReceptId',async (req: Request, res: Response) => {
    
    const recipeId = await getIngredientsId(req.params.ReceptId)
    res.status(200).json(recipeId)
})

router.get('/search/:Recept', async (req:Request, res: Response) => {
    const foundRecipe = await getReceptSearch(req.params.Recept)
    res.status(200).json(foundRecipe)
})

router.post('/:RecipeId/ratings', async (req: Request, res: Response) => {
    console.log("Router reached",req.params.RecipeId,req.body.ratings )
    const updatedRating = await postNewRating(req.params.RecipeId, req.body.ratings)
    res.status(200).json(updatedRating)
})

// router.post('/', async (req: Request, res: Response)=>{
//    const createdIngredients = await createIngredients(req.body);
//    res.status(201).json(createdIngredients)
// })


export default router