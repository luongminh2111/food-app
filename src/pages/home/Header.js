import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/login/LoginAction";
function Header() {
  const history = useHistory();
  const [showDropList, setShowDropList] = useState(false);

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <div className="header">
      <div className="header__logo" onClick={() => history.push("/")}>
        <span className=""> Logo</span>
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
        <li className="header__link-item ">
          <span className="" onClick={() => history.push("/forum")}>Diễn đàn</span>
        </li>
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
              onClick={() => handleLogout()}
            >
              Đăng xuất
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
