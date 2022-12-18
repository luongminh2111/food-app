import React, { useState } from "react";
import Header from "../home/Header";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "material-ui-search-bar";
import "../../styles/_recipe.scss";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "./RecipeModal";
import Footer from "../home/Footer";
import TagsInput from "./component/TagsInput";
import { recipes } from "../../contains/recipe";
function Recipe(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [searchStr, setSearchStr] = useState("");
  const handleSearch = () => {
    // if (searchStr) history.push(`/list/${searchStr.split(' ').join(':')}`);
  };
  const [suggestions, setSuggestions] = useState([]);

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
                <Box className="suggestion-item-1" key={index}>
                  {item.recipeName}
                </Box>
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
