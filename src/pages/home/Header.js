import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const [showDropList, setShowDropList] = useState(false);

  return (
    <div className="header">
      <div className="header__logo" onClick={() => history.push("/")}>
        <span className=""> ロゴ</span>
      </div>
      <ul className="header__link">
        <li className="header__link-item" onClick={() => history.push("/")}>
          <span
            className="header__link-item--underline"
            onClick={() => history.push("/daily")}
          >
           Nhật ký
          </span>
        </li>
        {/* <li className="header__link-item " onClick={()=> history.push("/statistic")}>
          <span className="" on>統計</span>
        </li> */}
        <li className="header__link-item ">
          <span className="" onClick={() => history.push("/recipe")}>
           Công thức
          </span>
        </li>
        {/* <li className="header__link-item ">
          <span className="">フォーラム</span>
        </li> */}
      </ul>
      <div
        className="header__icon "
        onClick={() => setShowDropList(!showDropList)}
      >
        <PersonIcon />
        {showDropList ? (
          <div className="dropdown-list">
            <div
              className="btn-list btn-logout"
              onClick={() => history.push("/login")}
            >
              Đăng suất
            </div>
            <div
              className="btn-list change-pass"
              onClick={() => history.push("/change-password")}
            >
              Đổi mật khẩu
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Header;
