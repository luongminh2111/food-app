import React from "react";
import Header from "../../home/Header";
import { Box } from "@mui/material";
import "../style/index.scss";
import FilterAll from "./FilterAll";
import FilterCook from "./FilterCook";
import FilterCookingMode from "./FilterCookingMode";
import FilterTips from "./FilterTips";
import Guide from "./Guide";

function Forum(props) {
  const [value, setValue] = React.useState(1);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const renderTabContent = (value) => {
    switch (value) {
      case 0:
        return <FilterAll />;
      case 1:
        return <FilterCook />;
      case 2:
        return <FilterCookingMode />;
      case 3:
        return <FilterTips />;
      case 4:
        return <Guide />;
      default:
        return <FilterAll />;
    }
  };

  return (
    <div className="forum-wrapper">
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
    </div>
  );
}
export default Forum;
