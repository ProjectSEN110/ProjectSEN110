import React, {useEffect, useState} from "react";  
import Recipe from "./Recipe";
import './App.css';



const App = () => {

  const APP_ID = "c694b2e3"; 
  const APP_KEY = "967cc90350de9244f5248f1fb4464556";
  
  const [ recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [ query, setQuery] = useState("chicken");



  useEffect(() =>  {// 
    getRecipes();
  }, [query]);

const getRecipes = async () => {
  const response = await fetch( `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    {
      headers: {
        "Edamam-Account-User":"chimdiii"
      }
    } 
  ); 
  const data =  await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};
  const updateSearch = e => {
    setSearch(e.target.value)
 
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(

      <div className="App">
          <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
              <button className="search-button" type="submit">
                  search
              </button>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
            < Recipe 
            key= {recipe.recipe.uri}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            />
          ))}
          </div>
      </div>
  );
};

export default App;