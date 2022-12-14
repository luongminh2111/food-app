import React, {useState} from "react";
import  { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Targetform from "./component/TargetForm";
import Foodform from "./component/FoodForm";
import { Menu } from "../../contains/Menu";
import axios from 'axios';
import DateSetting from "./component/DateSetting";
import { useEffect } from "react";
import FoodCard from "./component/FoodCard";
import { getFilterFood } from "../../actions/food/foodActionCallApi";
function Main() {
  const [open, setOpen] = React.useState(false);
  const [openFoodForm, setOpenFoodForm] = React.useState(false);
  const [Type, setType] = React.useState();
  const [other, setOther] = React.useState([]);
  const [dateSelect, setDateSelect] = React.useState(new Date());
  const [listBreakFast, setListBreakFast] = useState([]);
  const [listLunch, setListLunch] = useState([]);
  const [listDinner, setListDinner] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`http://localhost:8082/api/daybook/currentday?date=1671035696407`)
    .then(res => {
        const listFoods = res?.data?.data;
        const breakfasts = listFoods?.filter(e => e.meal === 'BREAKFAST')?.map(e => e.foodId) || [];
        const lunchs = listFoods?.filter(e => e.meal === 'LUNCH')?.map(e => e.foodId) || [];
        const dinners = listFoods?.filter(e => e.meal === 'DINNER')?.map(e =>e.foodId) || [];
        console.log("kiem tra res :", res);
        if(breakfasts.lengh > 0){
          setListBreakFast(Menu.filter(item => breakfasts.includes(item.id)));
        }
        if(lunchs.length > 0){
          setListLunch(Menu.filter(item => lunchs.includes(item.id)));
        }
        if(dinners.length > 0){
          setListDinner(Menu.filter(item => dinners.includes(item.id)));
        }
    })
    
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
      <DateSetting dateSelect={dateSelect} setDateSelect={setDateSelect}/>

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
            朝ごはん: {listBreakFast.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {listBreakFast.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.name}
                quantity={item.gram}
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
            昼ごはん: {listLunch.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {listLunch.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.name}
                quantity={item.gram}
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
            晩ごはん: {listDinner.reduce((total, item) => total + item.calo, 0)}
            カロリー
          </span>
          <ul className="main__menu">
            {listDinner.map((item, index) => (
              <FoodCard
                id={item.id}
                FoodName={item.name}
                quantity={item.gram}
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
        date={dateSelect}
      />
      <Targetform onclick={open} onclose={handleClose} />
    </div>
  );
}
export default Main;