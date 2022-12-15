import React, {useMemo} from "react";
import  { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Targetform from "./component/TargetForm";
import Foodform from "./component/FoodForm";
import { Menu } from "../../contains/Menu";
import DateSetting from "./component/DateSetting";
import { useEffect } from "react";
import FoodCard from "./component/FoodCard";
import { getFilterFood } from "../../actions/food/foodActionCallApi";
function Main() {
  const [open, setOpen] = React.useState(false);
  const [openFoodForm, setOpenFoodForm] = React.useState(false);
  const [Type, setType] = React.useState();
  const [other, setOther] = React.useState([]);
  const [dateSelect, setDateSelect] = React.useState((new Date().getTime()));
  const positionCallApi = useSelector(state => state.food.positionCallApi);
  const breakFasts1 = useSelector(state => state.food?.listFoods)?.filter(e => e.meal === 'BREAK_FAST') || [];
  const lunchs1 = useSelector(state => state.food?.listFoods)?.filter(e => e.meal === 'LUNCH') || [];
  const dinners1 = useSelector(state => state.food?.listFoods)?.filter(e => e.meal === 'DINNER') || [];
  const breakFasts = breakFasts1?.map(e => e.foodId) || [];
  const lunchs = lunchs1?.map(e => e.foodId) || [];
  const dinners = dinners1?.map(e =>e.foodId) || [];
  const listBreakFast = (Menu.filter(item => breakFasts?.includes(item.id)));
  const listLunch = (Menu.filter(item => lunchs?.includes(item.id)));
  const listDinner  = (Menu.filter(item => dinners?.includes(item.id)));
  const resBreakFasts = useMemo(() => {
    let arrayTemp = [];
    listBreakFast.map(e => {
      let temp = breakFasts1.find(item => item.foodId === e.id);
      if(temp){
        arrayTemp.push({
          id: temp.foodId,
          type: temp.meal,
          idBE: temp.id,
          name: e.name,
          amount: temp.amount,
          calo: e.calo,
        })
      }
    })
    return arrayTemp;
  }, [listBreakFast]);
  const resLunchs = useMemo(() => {
    let arrayTemp = [];
    listLunch.map(e => {
      let temp = lunchs1?.find(item => item.foodId === e.id);
      if(temp){
        arrayTemp.push({
          id: temp.foodId,
          type: temp.meal,
          idBE: temp.id,
          name: e.name,
          amount: temp.amount,
          calo: e.calo,
        })
      }
    
    })

    return arrayTemp;
  }, [listLunch]);

  const resDinners = useMemo(() => {
    let arrayTemp = [];
    listDinner.map(e => {
      let temp = dinners1?.find(item => item.foodId === e.id);
      if(temp){
        arrayTemp.push({
          id: temp.foodId,
          type: temp.meal,
          idBE: temp.id,
          name: e.name,
          amount: temp.amount,
          calo: e.calo,
        })
      }
    })
    return arrayTemp;
  }, [listDinner]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilterFood((new Date()).getTime()));
  }, []);

  useEffect(() => {
    dispatch(getFilterFood(dateSelect));
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
            {resBreakFasts.map((item, index) => (
              <FoodCard
                key={index *4}
                item={item}
                date={dateSelect}
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
            {resLunchs.map((item, index) => (
              <FoodCard
              key={index *3}
              item={item}
              date={dateSelect}
              />)
            )}
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
            {resDinners.map((item, index) => (
              <FoodCard
                key ={index}
                item={item}
                date={dateSelect}
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
                key ={index * 2}
                item={item}
                type={Type}
                date={dateSelect}
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
        update={false}
      />
      <Targetform onclick={open} onclose={handleClose} />
    </div>
  );
}
export default Main;