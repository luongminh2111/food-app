import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Targetform from "./component/TargetForm";
import Foodform from "./component/FoodForm";
import Date from "./component/DateSetting";
import { FoodData } from "../../contains/FoodData";
import { useEffect } from "react";
import FoodCard from "./component/FoodCard";
import _default from "react-bootstrap/esm/Accordion";
export default function Main() {
  const [open, setOpen] = React.useState(false);
  const [openFoodForm, setOpenFoodForm] = React.useState(false);
  const [Type, setType] = React.useState();
  const [breakfast, setBreakfast] = React.useState([]);
  const [lunch, setLunch] = React.useState([]);
  const [dinner, setDinner] = React.useState([]);
  const [other, setOther] = React.useState([]);
  useEffect(() => {
    let breakfast = FoodData.filter((a) => {
      return a.type.indexOf("朝ごはん") >= 0;
    });
    let lunch = FoodData.filter((a) => {
      return a.type.indexOf("昼ごはん") >= 0;
    });
    let dinner = FoodData.filter((a) => {
      return a.type.indexOf("晩ごはん") >= 0;
    });
    let other = FoodData.filter((a) => {
      return a.type.indexOf("他") >= 0;
    });
    setBreakfast(breakfast);
    setLunch(lunch);
    setDinner(dinner);
    setOther(other);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenFoodForm = (event) => {
    setType(event.currentTarget.value);
    setOpenFoodForm(true);
  };

  const handleCloseFoodForm = () => {
    setOpenFoodForm(false);
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
            朝ごはん: {breakfast.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {breakfast.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.foodName}
                quantity={item.quantity}
                calo={item.calo}
              />
            ))}
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="朝ごはん"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            昼ごはん: {lunch.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {lunch.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.foodName}
                quantity={item.quantity}
                calo={item.calo}
              />
            ))}
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="昼ごはん"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            晩ごはん: {dinner.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {dinner.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.foodName}
                quantity={item.quantity}
                calo={item.calo}
              />
            ))}
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="晩ごはん"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">
            他: {other.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {other.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.foodName}
                quantity={item.quantity}
                calo={item.calo}
              />
            ))}

            <li className="main__icon">
              <button
                className="main__icon-item"
                value="他"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <Foodform
        onclick={openFoodForm}
        onclose={handleCloseFoodForm}
        type={Type}
      />
      <Targetform onclick={open} onclose={handleClose} />
    </div>
  );
}
