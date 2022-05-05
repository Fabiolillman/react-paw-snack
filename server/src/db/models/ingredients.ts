import  {Schema, model} from 'mongoose';

export interface IngredientsType {
name: string,
rating: number,
about: string,
ingredients: string,
time: number
}

const schema = new Schema<IngredientsType>({
name:{type: String, Required:false},
rating: {type: Number, Required:false},
about: {type: String, Required:false},
ingredients: {type: String, Required:false},
time: {type: Number, Required:false}
})

const IngredientsModel = model<IngredientsType>('ingredients', schema)

export default IngredientsModel