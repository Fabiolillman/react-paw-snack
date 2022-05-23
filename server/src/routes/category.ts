import express, {Request, Response} from 'express';
import { getCategory, getReceptByCategory, getRecipeInCategory } from '../db/category';

const router = express.Router();

router.get('/', async (req: Request, res: Response)=>{
    const categoryList = await getCategory()
    res.json(categoryList)
})


router.get('/:currentCategory/ingredients', async (req: Request, res: Response)=>{
   const createdIngredients = await getReceptByCategory(req.params.currentCategory);
   res.status(201).json(createdIngredients)
})

router.get('/:currentCategory/:query', async (req: Request, res: Response) => {
    const category = await getRecipeInCategory(req.params.currentCategory, req.params.query)
    res.status(200).json(category)
})

// router.post('/', async (req: Request, res: Response)=>{
//     const createdCategory:any = await createIngredients(req.params.categoryId, req.body);
//     res.status(201).json(createdIngredients)
//  })

export default router