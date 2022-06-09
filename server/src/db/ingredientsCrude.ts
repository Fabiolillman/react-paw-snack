import ReceptModel, {ReceptType} from "./models/recept";



export const getIngredients = async()=>{
return await ReceptModel.find();
}

export const getIngredientsId = async(ReceptId:string)=>{
    return await ReceptModel.find({_id: ReceptId})
}

export const getReceptSearch = async(title:string)=>{
    const RecipeSearch = await ReceptModel.find({
        title: { $regex: title, $options: 'i' } 
        })
    return RecipeSearch
}

export const postNewRating = async(RecipeId:String, rating:Number)=>{
    const NewRating = await ReceptModel.findOneAndUpdate(
        {_id:RecipeId}, {$push:{ratings:rating}})
    return NewRating
}

export const createIngredients = async(Ingredients:ReceptType)=>{
    const newIngredients = new ReceptModel(Ingredients);
    await newIngredients.save();
    return newIngredients
}