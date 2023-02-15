import React, { useState } from "react";
import Header from "../../home/Header";
import { Box } from "@mui/material";
import "../style/index.scss";
import FilterAll from "./FilterAll";
import FilterCook from "./FilterCook";
import FilterCookingMode from "./FilterCookingMode";
import FilterTips from "./FilterTips";
import Guide from "./Guide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListPost } from "../actions/ForumActionCallApi";
import Footer from "../../home/Footer";
import { useMemo } from "react";
import PostDetail from "./PostDetail";
import { renderAllPost } from "../actions/ForumActions";

function Forum(props) {
  const dispatch = useDispatch();
  const dataForum = useSelector((state) => state.forum.listPost);
  useEffect(() => {
    dispatch(getListPost());
  }, []);
  // console.log("check data rom : ", dataForum);
  const [value, setValue] = useState(0);
  const [itemSelected, setItemSelected] = useState({});
  const [isPost, setIsPost] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChangeTab = (newValue) => {
    setValue(newValue);
    setIsPost("");
  };

  const handleSearchPost = (e) => {
    setSearchValue(e.target.value);
  };

  const listSearchPost = useMemo(() => {
    if(searchValue?.length === 0){
      return null;
    }
    const arr = dataForum?.filter((e) => e.title.includes(searchValue));
    return arr;
  }, [searchValue]);

  const renderTabContent = (value) => {
    switch (value) {
      case 0:
        return (
          <FilterAll
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
      case 1:
        return (
          <FilterCook
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
      case 2:
        return (
          <FilterCookingMode
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
      case 3:
        return (
          <FilterTips
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
      case 4:
        return (
          <Guide
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
      default:
        return (
          <FilterAll
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            dataForum={dataForum}
          />
        );
    }
  };

  return (
    <div className="forum-wrapper">
      <div className="container">
        <Header />
        <div className="forum-content">
          <div className="tabs">
            <div
              className={`tab-item all ${value === 0 ? "active" : ""}`}
              onClick={() => handleChangeTab(0)}
            >
              Tất cả
            </div>
            <div
              className={`tab-item cook ${value === 1 ? "active" : ""}`}
              onClick={() => handleChangeTab(1)}
            >
              Nấu nướng
            </div>
            <div
              className={`tab-item cooking-mode ${value === 2 ? "active" : ""}`}
              onClick={() => handleChangeTab(2)}
            >
              Chế độ ăn uống
            </div>
            <div
              className={`tab-item tips ${value === 3 ? "active" : ""}`}
              onClick={() => handleChangeTab(3)}
            >
              Mẹo vặt
            </div>
            <div
              className={`tab-item guide ${value === 4 ? "active" : ""}`}
              onClick={() => handleChangeTab(4)}
            >
              Hỏi đáp
            </div>
          </div>
          <div className="tabs-content">
            <div className="search-bar">
              <input
                value={searchValue}
                type="text"
                className="input-content"
                placeholder="Tìm kiếm bài đăng"
                onChange={(value) => handleSearchPost(value)}
              ></input>
            </div>

            {listSearchPost?.length > 0 ? (
               <div className="list-post-wrapper">
               {
                 isPost > 0 ? <PostDetail data={itemSelected} /> : renderAllPost(listSearchPost, setItemSelected, setIsPost)
               }
             </div>
            ) : (
              renderTabContent(value)
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Forum;
