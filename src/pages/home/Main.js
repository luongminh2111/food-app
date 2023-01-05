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
import {
  getListRecipe,
  getFilterRecipe,
} from "../../actions/recipe/RecipeActionCallApi";

function Main() {
  const [open, setOpen] = React.useState(false);
  const [openFoodForm, setOpenFoodForm] = React.useState(false);
  const [Type, setType] = React.useState();
  const [dateSelect, setDateSelect] = React.useState(new Date().getTime());
  const listFood = useSelector((state) => state.food.listFoods);
  const positionCallApi = useSelector((state) => state.food.positionCallApi);
  const listFilterFood = useSelector((state) => state.food.listFilterFood);
  const targetReducer = useSelector((state) => state.target.editData);
  console.log("check target reducer :", targetReducer);
  const [breakFastCalo, setBreakFastCalo] = useState(0);
  const [lunchCalo, setLunchCalo] = useState(0);
  const [dinnerCalo, setDinnerCalo] = useState(0);
  const [breakFastCarb, setBreakFastCarb] = useState(0);
  const [lunchCarb, setLunchCarb] = useState(0);
  const [dinnerCarb, setDinnerCarb] = useState(0);
  const [breakFastProtein, setBreakFastProtein] = useState(0);
  const [lunchProtein, setLunchProtein] = useState(0);
  const [dinnerProtein, setDinnerProtein] = useState(0);
  const [breakFastFat, setBreakFastFat] = useState(0);
  const [lunchFat, setLunchFat] = useState(0);
  const [dinnerFat, setDinnerFat] = useState(0);
  const [customCalo, setCustomCalo] = useState(0);
  const target = useSelector((state) => state.target?.data);
  const dispatch = useDispatch();
  const handleSumCalo = (arr) => {
    let sumCalo = 0;
    arr.map((e) => {
      sumCalo += (e.amount * e.food.calo) / 100;
    });
    return Math.round(sumCalo * 100) / 100;
  };

  const handleSumProtein = (arr) => {
    let sumProtein = 0;
    arr.map((e) => {
      sumProtein += (e.amount * e.food.protein) / 100;
    });
    return Math.round(sumProtein * 100) / 100;
  };
  const handleSumCarb = (arr) => {
    let sumCarb = 0;
    arr.map((e) => {
      sumCarb += (e.amount * e.food.carb) / 100;
    });
    return Math.round(sumCarb * 100) / 100;
  };

  const handleSumFat = (arr) => {
    let sumFat = 0;
    arr.map((e) => {
      sumFat += (e.amount * e.food.fat) / 100;
    });
    return Math.round(sumFat * 100) / 100;
  };

  const listBreakFast = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "BREAK_FAST");
    setBreakFastCalo(handleSumCalo(foods));
    setBreakFastCarb(handleSumCarb(foods));
    setBreakFastProtein(handleSumProtein(foods));
    setBreakFastFat(handleSumFat(foods));

    return foods;
  }, [listFilterFood]);

  const listLunch = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "LUNCH");
    setLunchCalo(handleSumCalo(foods));
    setLunchCarb(handleSumCarb(foods));
    setLunchProtein(handleSumProtein(foods));
    setLunchFat(handleSumFat(foods));
    return foods;
  }, [listFilterFood]);

  const listDinner = useMemo(() => {
    const foods = listFilterFood.filter((e) => e.mealType === "DINNER");
    setDinnerCalo(handleSumCalo(foods));
    setDinnerCarb(handleSumCarb(foods));
    setDinnerProtein(handleSumProtein(foods));
    setDinnerFat(handleSumFat(foods));
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
        <span className="main__sum">
          Tổng lượng calo: {breakFastCalo + lunchCalo + dinnerCalo} calo
          <p>Đạm {breakFastProtein + lunchProtein + dinnerProtein}</p>
          <p>Đường {breakFastCarb + lunchCarb + dinnerCarb}</p>
          <p>Béo {breakFastFat + lunchFat + dinnerFat}</p>
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexWrap: "no-wrap" }}>
            <div style={{ marginRight: "25px" }}>Mục tiêu</div>
            {targetReducer.mode === "Tự nhập" ? (
              targetReducer.type === "calo" ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {targetReducer.calo} calo{" "}
                </div>
              ) : (
                <div>
                  <div> Đường : {targetReducer.carb} </div>
                  <div> Đạm : {targetReducer.protein} </div>
                  <div> Béo : {targetReducer.fat} </div>
                </div>
              )
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                {targetReducer.calo} calo{" "}
              </div>
            )}
          </div>
          {/* <span>Mục tiêu: {Math.round(customCalo * 100) / 100} calo</span> */}
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
          <span className="main__title">Bữa sáng: {breakFastCalo} calo</span>
          <ul className="main__menu">
            <FoodCard
              key={1}
              type="Bữa sáng"
              listFood={listFood}
              listFoodOfDay={listBreakFast}
              date={dateSelect}
            />
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="Bữa sáng"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">bữa trưa: {lunchCalo} calo</span>
          <ul className="main__menu">
            <FoodCard
              key={2}
              listFood={listFood}
              type="Bữa trưa"
              listFoodOfDay={listLunch}
              date={dateSelect}
            />
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="Bữa trưa"
                onClick={handleClickOpenFoodForm}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">Bữa tối: {dinnerCalo} calo</span>
          <ul className="main__menu">
            <FoodCard
              key={3}
              type="Bữa tối"
              listFood={listFood}
              listFoodOfDay={listDinner}
              date={dateSelect}
            />
            <li className="main__icon">
              <button
                className="main__icon-item"
                value="Bữa tối"
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
        targetReducer={targetReducer}
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
