import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function TagsInput(props) {
  const { setSearchStr, searchStr } = props;
  const removeTags = (indexToRemove) => {
    setSearchStr([...searchStr.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setSearchStr([...searchStr, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className="tags-search">
      <div className="search-input">
        <ul className="tags-holder">
          {searchStr?.map((tag, index) => (
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
            placeholder="Nhấn Enter để thêm thẻ"
            className="tags-input"
          />
        </ul>
      </div>
      <button className="button-search">
        <FontAwesomeIcon icon={faSearch} className="button-icon" />
      </button>
    </div>
  );
}

export default TagsInput;
