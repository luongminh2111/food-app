import React, {useState} from "react";
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
import { saveFoodItem, updateFoodItem } from "../../../actions/food/foodActionCallApi";
import { Menu } from "../../../contains/Menu";
function FoodForm(props) {
  const { type, date, onclose, update, item } = props;
  console.log("kiem tra item  form food:", item);
  const dispatch = useDispatch();
  const [food, setFood] = React.useState(Menu[0]);
  const [name, setName] = useState(item?.name || Menu[0].name);
  const [quantity, setQuantity] = useState(item?.amount || 0);
  const [caloCustom, setCaloCustom] = useState((item?.amount * item?.calo) || 0);

  const handleChangeQuantity = (event) => {
   
    const value = event.target.value;
    setQuantity(value);
    console.log("kiem tra food :", food);
    if(item?.calo > 0){
      setCaloCustom(value * item.calo);
    }
    else{
      setCaloCustom(value * food.calo);
    }
    event.preventDefault();
  };

  const handleChangeFood = (e) => {
    setFood(Menu.find(item => item.name === e.target.value));
    setName(Menu.find(item => item.name === e.target.value).name);
  };

  const handleAction = () => {
    if(update){
      handleUpdateFoodItem();
    }else{
      handleSaveFoodItem();
    }
  };

  const handleSaveFoodItem = () => {
    const menuItem = {
      type,
      food,
      quantity,
      date,
    };
    dispatch(saveFoodItem(menuItem, onclose));
  };
  const handleUpdateFoodItem = () => {
    const menuItem = {
      type,
      food,
      quantity,
      date,
    };
    dispatch(saveFoodItem(menuItem, onclose));
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
              {Menu.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="main__input main__input--flex">
            <div>
              <div className="main__input-title">quantity(gram)</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={quantity }
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
              <div className="main__input-title">calo</div>
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
        <Button onClick={handleAction} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FoodForm;
