import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const TagsInput = () => {
  const [tags, setTags] = React.useState([]);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags-search">
      <div className="search-input">
        <ul className="tags-holder">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
          <input
            type="text"
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
            placeholder="Enter キーを押してタグを追加する"
            className="tags-input"
          />
        </ul>
      </div>
      <button className="button-search">
        <FontAwesomeIcon icon={faSearch} className="button-icon" />
      </button>
    </div>
  );
};

export default TagsInput;
