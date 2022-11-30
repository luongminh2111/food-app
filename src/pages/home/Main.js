import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <div className="main">
      <div className="main__date">
        <div className="main__date-screen">
          <CalendarMonthIcon />
          <span>今日</span>
        </div>
      </div>
      <div className="main__parameter">
        <span>総カロリー：730カロリー</span>
        <span>目標：1000カロリー</span>
      </div>
      <ul className="main__form">
        <li className="main__form-item">
          <span className="main__title">朝ごはん：730カロリー</span>
          <ul className="main__menu">
            <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li>

            <li className="main__icon">
              <div className="main__icon-item">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="main__icon-item">
                <FontAwesomeIcon icon={faPen} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">昼ごはん：</span>
          <ul className="main__menu">
            {/* <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li> */}

            <li className="main__icon">
              <div className="main__icon-item">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              {/* <div className="main__icon-item">
                <FontAwesomeIcon icon={faPen} />
              </div> */}
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">晩ごはん：</span>
          <ul className="main__menu">
            {/* <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li> */}

            <li className="main__icon">
              <div className="main__icon-item">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              {/* <div className="main__icon-item">
                <FontAwesomeIcon icon={faPen} />
              </div> */}
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">他</span>
          <ul className="main__menu">
            {/* <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li> */}

            <li className="main__icon">
              <div className="main__icon-item">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              {/* <div className="main__icon-item">
                <FontAwesomeIcon icon={faPen} />
              </div> */}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
