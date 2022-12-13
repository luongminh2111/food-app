import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Targetform from "./component/TargetForm";
import Foodform from "./component/FoodForm";
import Date from "./component/DateSetting";
import { FoodData } from "./data/FoodData";
import { useEffect } from "react";
import FoodCard from "./component/FoodCard";
export default function Main() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [food, setFood] = React.useState(
    FoodData.map((a) => {
      return a;
    })
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <span className="main__title">
            朝ごはん: {food.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {food.map((item, index) =>
              item.type.indexOf("朝ごはん") >= 0 ? (
                <FoodCard
                  id={item.id}
                  FoodName={item.foodName}
                  quantity={item.quantity}
                  calo={item.calo}
                />
              ) : (
                <div className="main__none"></div>
              )
            )}
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            昼ごはん: {food.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {food.map((item, index) =>
              item.type.indexOf("昼ごはん") >= 0 ? (
                <FoodCard
                  id={item.id}
                  FoodName={item.foodName}
                  quantity={item.quantity}
                  calo={item.calo}
                />
              ) : (
                <div className="main__none"></div>
              )
            )}
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            晩ごはん: {food.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {food.map((item, index) =>
              item.type.indexOf("晩ごはん") >= 0 ? (
                <FoodCard
                  id={item.id}
                  FoodName={item.foodName}
                  quantity={item.quantity}
                  calo={item.calo}
                />
              ) : (
                <div className="main__none"></div>
              )
            )}

            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            他: {food.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {food.map((item, index) =>
              item.type.indexOf("他") >= 0 ? (
                <FoodCard
                  id={item.id}
                  FoodName={item.foodName}
                  quantity={item.quantity}
                  calo={item.calo}
                />
              ) : (
                <div className="main__none"></div>
              )
            )}

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
