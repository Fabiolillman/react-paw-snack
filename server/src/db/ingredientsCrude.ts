import IngredientsModel, {IngredientsType} from "./models/ingredients";

export const createIngredients = async(Ingredients:IngredientsType)=>{
    const newIngredients = new IngredientsModel(Ingredients);
    await newIngredients.save();
    return newIngredients
}