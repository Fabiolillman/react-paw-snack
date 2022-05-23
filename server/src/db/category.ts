import ReceptModel, {ReceptType} from "./models/recept";

export const getCategory = async()=>{
    const categories = await ReceptModel.aggregate([
        { $match: { }},
        { $unwind: '$category'},
        { $group: { _id: '$category', count: { $sum: 1}}},
        { $sort: {count: -1}}
    ],);
    return categories;

// const getCategory = await ReceptModel.find();
// return getCategory.map((recept)=>recept.category)
}

export const getReceptByCategory = async(category:string)=>{
    return await ReceptModel.find({category: category})    
}

export const getRecipeInCategory = async(category:string, recept:string)=>{
    const recipesCategory = await ReceptModel.find({
        category: category, 
        title: { $regex: recept, $options: 'i' } 
        })
    return recipesCategory
}
