import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__logo  ">
        <span className=""> ロゴ</span>
      </div>
      <ul className="header__link">
        <li className="header__link-item  ">
          <span className="header__link-item--underline">日記</span>
        </li>
        <li className="header__link-item ">
          <span className="" on>統計</span>
        </li>
        <li className="header__link-item ">
          <span className="" onClick={()=> history.push("/recipe")}>レシピ</span>
        </li>
        <li className="header__link-item ">
          <span className="">フォーラム</span>
        </li>
      </ul>
      <div className="  header__icon ">
        <PersonIcon />
      </div>
    </div>
  );
}
export default Header;