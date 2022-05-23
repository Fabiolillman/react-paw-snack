import  {Schema} from 'mongoose';


export interface IngredientType {
    ingredient: String,
    amount: Number,
    unit: String 
}


export const IngredientSchema = new Schema<IngredientType>({
    ingredient: {type: String, required: true},
    amount: {type: Number, required: true},
    unit: {type: String, required: true}  
})
