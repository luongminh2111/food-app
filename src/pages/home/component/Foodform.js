import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { saveFoodItem } from "../../../actions/food/FoodActionCallApi";

function FoodForm(props) {
  const { type, date, onclose, isUpdate, listFood, foodSelected } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [caloCustom, setCaloCustom] = useState(0);
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    if (foodSelected?.food?.id > 0) {
      setName(foodSelected.food.name);
      setQuantity(foodSelected.amount);
      setCaloCustom(
        ((foodSelected.amount * foodSelected.food.calo) / 100).toFixed(2)
      );
    } else {
      setName(listFood[0]?.name);
    }
  }, [listFood, foodSelected]);

  useEffect(() => {
    setFoodItem(listFood?.find((e) => e.name === name));
  }, [name]);

  const handleChangeQuantity = (event) => {
    const value = event.target.value;
    setQuantity(value);
    const foodItem = listFood?.find((e) => e.name === name);
    setCaloCustom(((value * foodItem.calo) / 100).toFixed(2));
  };

  const handleChangeFood = (e) => {
    setName(e.target.value);
  };

  const handleSaveFoodItem = (e) => {
    e.preventDefault();
    const menuItem = {
      id: foodSelected?.id,
      type,
      quantity,
      foodId: foodItem.id,
      date,
    };
    dispatch(saveFoodItem(menuItem, isUpdate, onclose));
    setQuantity(0);
    setCaloCustom(0);
    setName(listFood[0]?.name);
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">{type}</div>

          <div className="main__selecter">
            <Select
              displayEmpty
              value={name}
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => handleChangeFood(e)}
            >
              {listFood.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="main__input main__input--flex">
            <div>
              <div className="main__input-title">額(グラム)</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={quantity}
                  type="number"
                  onChange={(e) => handleChangeQuantity(e)}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="main__input main__input--flex">
            <div>
              <div className="main__input-title">カロリー</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={caloCustom}
                  aria-describedby="outlined-weight-helper-text"
                  disabled
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onclose} xs={{}}>
          キャンセル
        </Button>
        <Button onClick={(e) => handleSaveFoodItem(e)} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FoodForm;
