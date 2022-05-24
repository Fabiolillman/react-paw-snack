import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import SingleItem from "./item";
import SearchBar from "./searchbar";


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
        <div>
            <SearchBar sendValue={search} setSearch={setSearch}/>
            <div>
                {category.map((recipe: any) => <SingleItem key={recipe._id} recept={recipe}/>)}
            </div>
        </div>
    )
}

export default FetchListByCategory




    // const [category, setCategory] = useState<any>([]);
    // console.log("Recept title", category);
    // // const { Id } = useParams<any>()
    // const params = useParams();
    // useEffect(() => {
    //     const getReceptById = async () => {
    //         console.log("this is before params", params)
    //     const category = await fetch(`http://localhost:3001/category/${params.id}/ingredients`)
    //     .then(res => res.json())
    //     console.log("this is after params", params)
    //     await setCategory(category)
    //     console.log(category);
    //     }
    //     getReceptById();
     
    // }, [])
    // console.log("Recept title", category);

    // const [recipes, setRecipes] = useState<any>([]);
    // const { selectedCatagory } = useParams()
    // useEffect(() => {
    //     const fetchRecipes = async () => {
    //         const recipes = await fetch(`http://localhost:3001/category/${selectedCatagory}/ingredients`)
    //         .then(res => res.json())
    //         setRecipes(recipes);
    //     }
    //     fetchRecipes();
    // }, [selectedCatagory])