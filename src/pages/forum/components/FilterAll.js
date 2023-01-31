import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../../recipe/component/RecipeCard";

function FilterAll() {
  const dataForumFake = useSelector((state) => {
    return state.recipe?.data;
  });
  console.log("check data :" ,dataForumFake);
  return (
    <div className="list-post-wrapper">
      {dataForumFake.map((item, index) => (
        <div className="post-item" key={index}>
          <img src={item.img}></img>
          <div className="title">{item.recipeName}</div>
        </div>
      ))}
    </div>
  );
}
export default FilterAll;
