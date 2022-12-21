import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import TargetForm from "./component/TargetForm";
import FoodForm from "./component/FoodForm";
import DateSetting from "./component/DateSetting";
import { useEffect } from "react";
import { getTarget } from "../../actions/target/TargetActionCallApi";
import FoodCard from "./component/FoodCard";
import {
  getFilterFood,
  getListFood,
} from "../../actions/food/FoodActionCallApi";

function Main() {
  const [open, setOpen] = React.useState(false);
  const [openFoodForm, setOpenFoodForm] = React.useState(false);
  const [Type, setType] = React.useState();
  const [dateSelect, setDateSelect] = React.useState(new Date().getTime());
  const listFood = useSelector((state) => state.food.listFoods);
  const positionCallApi = useSelector((state) => state.food.positionCallApi);
  const listFilterFood = useSelector((state) => state.food.listFilterFood);
  const [breakFastCalo, setBreakFastCalo] = useState(0);
  const [lunchCalo, setLunchCalo] = useState(0);
  const [dinnerCalo, setDinnerCalo] = useState(0);
  const [customCalo, setCustomCalo] = useState(0);
  const target = useSelector((state) => state.target?.data);
  const dispatch = useDispatch();
  const handleSumCalo = (arr) => {
    let sumCalo = 0;
    arr.map((e) => {
      sumCalo += e.amount * e.food.calo;
    });
    return sumCalo;
  };

  const listBreakFast = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "BREAK_FAST");
    setBreakFastCalo(handleSumCalo(foods));

    return foods;
  }, [listFilterFood]);

  const listLunch = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "LUNCH");
    setLunchCalo(handleSumCalo(foods));
    return foods;
  }, [listFilterFood]);

  const listDinner = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "DINNER");
    setDinnerCalo(handleSumCalo(foods));
    return foods;
  }, [listFilterFood]);

  useEffect(() => {
    dispatch(getListFood());
    dispatch(getFilterFood(dateSelect));
    dispatch(getTarget(dateSelect));
  }, []);

  useEffect(() => {
    dispatch(getFilterFood(dateSelect));
    dispatch(getTarget(dateSelect));
  }, [dateSelect, positionCallApi]);

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
      <DateSetting dateSelect={dateSelect} setDateSelect={setDateSelect} />

      <div className="main__parameter">
        <span>
          総カロリー：{breakFastCalo + lunchCalo + dinnerCalo}カロリー
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>目標：{customCalo}カロリー</span>
          <div className="main__parameter-icon">
            <FontAwesomeIcon
              icon={faPen}
              className="main__parameter-icon-item"
              onClick={handleClickOpen}
            />
          </div>
        </div>
      </div>
      <ul className="main__form">
        <li className="main__form-item">
          <span className="main__title">
            朝ごはん: {breakFastCalo}
            カロリー
          </span>
          <ul className="main__menu">
            <FoodCard
              key={1}
              type="朝ごはん"
              listFood={listFood}
              listFoodOfDay={listBreakFast}
              date={dateSelect}
            />
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
            昼ごはん: {lunchCalo}
            カロリー
          </span>
          <ul className="main__menu">
            <FoodCard
              key={2}
              listFood={listFood}
              type="昼ごはん"
              listFoodOfDay={listLunch}
              date={dateSelect}
            />
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
            晩ごはん: {dinnerCalo}
            カロリー
          </span>
          <ul className="main__menu">
            <FoodCard
              key={3}
              type="晩ごはん"
              listFood={listFood}
              listFoodOfDay={listDinner}
              date={dateSelect}
            />
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
      </ul>
      <FoodForm
        onclick={openFoodForm}
        onclose={handleCloseFoodForm}
        type={Type}
        date={dateSelect}
        isUpdate={false}
        listFood={listFood}
      />
      <TargetForm
        onclick={open}
        onclose={handleClose}
        date={dateSelect}
        target={target}
        setCustomCalo={setCustomCalo}
        customCalo={customCalo}
      />
    </div>
  );
}
export default Main;
