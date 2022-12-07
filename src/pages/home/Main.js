import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Targetform from "./component/Targetform";
import Foodform from "./component/Foodform";
import Date from "./component/Date_setting";

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [cup, setCup] = React.useState("");
  const [protein, setProtein] = React.useState("");
  const [fat, setFat] = React.useState("");
  // const [values, setValues] = React.useState({
  //   weight: "",
  //   height: "",
  //   age: "",
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCup();
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <div className="main">
      <Date />

      <div className="main__parameter">
        <span>総カロリー：730カロリー</span>
        <span>
          目標：1000カロリー
          <FontAwesomeIcon
            icon={faPen}
            className="main__parameter-icon"
            onClick={handleClickOpen}
          />
        </span>
      </div>
      <ul className="main__form">
        <li className="main__form-item">
          <span className="main__title">朝ごはん：730カロリー</span>
          <ul className="main__menu">
            <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li>
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPen} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">昼ごはん：</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">晩ごはん：</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">他</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <Foodform onclick={open1} onclose={handleClose1} />
      <Targetform onclick={open} onclose={handleClose} />
    </div>
  );
}
