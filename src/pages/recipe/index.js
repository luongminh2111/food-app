import React, { useState } from "react";
import Header from "../home/Header";
import { useHistory } from "react-router-dom";
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "material-ui-search-bar";
import "../../styles/_recipe.scss";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "./RecipeModal";
import Footer from "../home/Footer";

function Recipe(props){
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [searchStr, setSearchStr] = useState('');
  const handleSearch = () => {
      // if (searchStr) history.push(`/list/${searchStr.split(' ').join(':')}`);
  }
  const [suggestions, setSuggestions] = useState(["にく", "トマト" , "ポタと"]);

  return (
    <Box className="recipe-wrapper">
        <Header />
        <Box className="recipe-body">
        <Box className="search-bar">
          <SearchBar
            // onChange={(newValue) => { setSearchStr(newValue) }}
            onRequestSearch={() => handleSearch()}
            value={searchStr}
            style={{
                width: '100%'
            }}
          />
        </Box>
          <Box className="body-contents">
            <Box className="content-item item_top"> 
            <Box className="item__title">
              食べて
            </Box >
           
            <Box className="item_top_content">
              <Box className="suggestion-list">
                {suggestions.map((sg, index) => (
                    <Box className="suggestion-item" key={index}>
                      <RecipeModal open={open} setOpen={setOpen} label={sg}/>
                    </Box>
                  ))}
              </Box >
              <Box className="icon-list">
                <Box className="main__icon-item" sx={{mr: 2}}>
                  <FontAwesomeIcon icon={faPlus} />
                </Box>
                <Box className="main__icon-item">
                  <FontAwesomeIcon icon={faPen} />
                </Box>
              </Box>
            </Box>
            </Box>
            <Box className="content-item item_bottom"> 
            <Box className="item__title">
              食べて
            </Box >
            <Box className="suggestion-list-1">
              {suggestions.map((sg, index) => (
                  <Box className="suggestion-item-1" key={index}>
                    {sg}
                  </Box>
                ))}
            </Box >
            </Box>
          </Box>
        </Box>
        <Footer />
    </Box>
  );
}
export default Recipe;