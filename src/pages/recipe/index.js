import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "material-ui-search-bar";

import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "./RecipeModal";
import Footer from "../home/Footer";
import TagsInput from "./component/TagsInput";
import RecipeCard from "./component/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getListRecipe,
  getFilterRecipe,
} from "../../actions/recipe/RecipeActionCallApi";

function Recipe(props) {
  const [searchStr, setSearchStr] = useState([]);
  const dispatch = useDispatch();
  const [recipeSearch, setRecipeSearch] = useState([]);
  const recipe = useSelector((state) => {
    return state.recipe?.data;
  });
  console.log("check recipe : ", recipe);
  useEffect(() => {
    dispatch(getListRecipe());
  }, []);

  useEffect(() => {
    if (searchStr.length === 0) {
      setRecipeSearch([]);
      dispatch(getListRecipe());
    } else {
      if(recipe?.length > 0){
        let arrTemp = [];
        const arr = recipe?.map(item => {
          if(item?.ingredients?.length > 0){
            const arr1 = item?.ingredients?.map(e => e?.name);
            searchStr?.map(e => {
              if(arr1.includes(e)){
                arrTemp.push(item);
              }})
            
          }
        })
        setRecipeSearch(arrTemp);
      }
      // dispatch(getFilterRecipe(searchStr));
    }
  }, [searchStr]);
  console.log("check search :" ,recipeSearch);
  return (
    <Box className="recipe-wrapper">
      <Header />

      <Box className="recipe-body">
        <Box
          className="search-bar"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TagsInput setSearchStr={setSearchStr} searchStr={searchStr} />
        </Box>
        <Box className="body-contents">
          <Box className="content-item item_bottom">
            <Box className="suggestion-list-1">
              <Box className="item__title">Gợi ý công thức</Box>
              {searchStr?.length > 0 ? recipeSearch?.map((item, index) => (
                <RecipeCard key={index}
                  id={item.id}
                  recipeName={item.recipeName}
                  img={item.img}
                  tutorial={item.tutorial}
                  calo={item.calo}
                  ingredients={item.ingredients}
                />
              )) : 
              recipe.map((item, index) => (
                <RecipeCard key={index}
                  id={item.id}
                  recipeName={item.recipeName}
                  img={item.img}
                  tutorial={item.tutorial}
                  calo={item.calo}
                  ingredients={item.ingredients}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
export default Recipe;
