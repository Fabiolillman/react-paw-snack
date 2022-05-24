import { useEffect, useState } from "react"
import SingleItem from "./item";
import SearchBar from "./searchbar";

const ItemList=()=>{

    const [search, setSearch] = useState('');
    const searchForRecipes = async (query: string) => {
        const recept = await fetch(`${process.env.REACT_APP_API_BASE_URL}/ingredients/search/${query}`)
        .then(res => res.json())
        setRecipes (recept);
    }
    const [recept, setRecipes] = useState<any>([]);
    const fetchRecipes = async () => {
        const recipes = await fetch(`${process.env.REACT_APP_API_BASE_URL}/ingredients`)
        .then(res => res.json())
        setRecipes(recipes);
    }
    useEffect(() => {
        if(search) {
            searchForRecipes(search)
        }else {
        fetchRecipes();
        }
        }, [search])
    
    return(
        <div>
        <SearchBar sendValue={search} setSearch={setSearch}
         />
        <div>
            {recept.map((recept: any) => <SingleItem key={recept._id} recept={recept}/>)}
        </div>
    </div>
    )
}

export default ItemList