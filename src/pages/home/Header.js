import React from "react";
import PersonIcon from "@mui/icons-material/Person";
export default function header() {
  return (
    <div className="header">
      <ul className="header__link">
        <li className="header__link-item  ">
          <span className=""> ロゴ</span>
        </li>
        <li className="header__link-item  ">
          <span className="header__link-item--underline">日記</span>
        </li>
        <li className="header__link-item ">
          <span className="">統計</span>
        </li>
        <li className="header__link-item ">
          <span className="">レシピ</span>
        </li>
        <li className="header__link-item ">
          <span className="">フォーラム</span>
        </li>
        <li className=" header__link-item header__icon ">
          <PersonIcon />
        </li>
      </ul>
    </div>
  );
}
