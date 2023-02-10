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

function Forum(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListPost());
  }, []);

  const [value, setValue] = useState(0);
  const [itemSelected, setItemSelected] = useState({});
  const [isPost, setIsPost] = useState("");

  const handleChangeTab = (newValue) => {
    setValue(newValue);
    setIsPost("");
  };

  const renderTabContent = (value) => {
    switch (value) {
      case 0:
        return (
          <FilterAll
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
      case 1:
        return (
          <FilterCook
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
      case 2:
        return (
          <FilterCookingMode
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
      case 3:
        return (
          <FilterTips
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
      case 4:
        return (
          <Guide
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
      default:
        return (
          <FilterAll
            setIsPost={setIsPost}
            isPost={isPost}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        );
    }
  };

  return (
    <div className="forum-wrapper">
      <div className="container">
        {" "}
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
          <div className="tabs-content">{renderTabContent(value)}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Forum;
