import  {Schema, model} from 'mongoose';
import  {IngredientSchema, IngredientType } from './ingredients';

export interface ReceptType {
title: string,
description: string,
imageUrl: string,
timeInMins: number,
ratings: Array<number>,
category: Array<string>,
ingredients: Array<IngredientType>,
instructions: Array<string>
}

const Receptschema = new Schema<ReceptType>({
title: {type: String, required: true},
description: {type: String, required: true},
imageUrl: {type: String, required: true},
timeInMins: {type: Number, required: true},
ratings: {type: [Number], required: true},
category: {type: [String], required: true},
instructions: {type: [String], required: true},
ingredients: {type: [IngredientSchema], required: true},
})

const ReceptModel = model<ReceptType>('ingredients', Receptschema)

export default ReceptModel