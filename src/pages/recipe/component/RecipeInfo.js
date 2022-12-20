import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../../recipe/style/recipeInfo.scss";
function RecipeInfo(props) {
  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogActions>
        <FontAwesomeIcon
          icon={faX}
          className="Info-icon"
          onClick={props.onclose}
        />
      </DialogActions>
      <DialogContent>
        <div className="Info__container">
          <div className="Info__title">
            <h2>{props.recipeName}</h2>
            <p>{props.calo}カロリー</p>
          </div>
          <img src={props.img} />
          <div className="Info__ingredients">
            材料:
            <ul>
              {props.ingredients.map((item, index) => {
                return (
                  <li className="Info__ingredients-item">
                    {item.ingredientsName}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Info__ingredients">
            作り方
            <p>{props.tutorial}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
RecipeInfo.propTypes = {
  onclick: PropTypes.bool,
  onclose: PropTypes.func,
  id: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tutorial: PropTypes.string.isRequired,
  calo: PropTypes.number.isRequired,
  ingredients: PropTypes.string,
};
export default RecipeInfo;
