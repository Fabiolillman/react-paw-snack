import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import SingleItem from "./item";
import SearchBar from "./searchbar";
import Category from "./category";


const FetchListByCategory=()=>{
    const [category, setCategory] = useState<any>([]);
    const params = useParams();
    const fetchRecipes = async () => {
        const recipes = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${params.id}/ingredients`)
        .then(res => res.json())
        setCategory(recipes);
    }
    const [search, setSearch] = useState('');
  const searchForRecipes = async (query: string) => {
      const recept = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${params.id}/${query}`)
      .then(res => res.json())
      setCategory (recept);
  }

  useEffect(()=>{
    if(search) {
      searchForRecipes(search)
  }else {
  fetchRecipes();
  }
  }, [search])

    return (
        <>
        <div>
            <SearchBar sendValue={search} setSearch={setSearch}/>
            <div>
                {category.map((recipe: any) => <SingleItem key={recipe._id} recept={recipe}/>)}
            </div>
        </div>
        </>
    )
}




export default FetchListByCategory
