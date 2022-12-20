import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "material-ui-search-bar";
import "../../styles/_recipe.scss";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "./RecipeModal";
import Footer from "../home/Footer";
import TagsInput from "./component/TagsInput";
import { recipes } from "../../contains/recipe";
import RecipeCard from "./component/RecipeCard";

function Recipe(props) {
  const history = useHistory();

  const [searchStr, setSearchStr] = useState("");
  const [recipe, setRecipe] = React.useState(
    recipes.map((a) => {
      return a;
    })
  );

  return (
    <Box className="recipe-wrapper">
      <Header />

      <Box className="recipe-body">
        <Box
          className="search-bar"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TagsInput />
        </Box>
        <Box className="body-contents">
          <Box className="content-item item_bottom">
            <Box className="item__title">食べて</Box>

            <Box className="suggestion-list-1">
              {recipes.map((item, index) => (
                <RecipeCard
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
