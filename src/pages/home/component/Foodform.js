import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { saveFoodItem } from "../../../actions/food/foodActionCallApi";
import { Menu } from "../../../contains/Menu";
function FoodForm(props) {
  const { type, date } = props;
  const dispatch = useDispatch();
  const [food, setFood] = React.useState(Menu[0]);
  const [quantity, setQuantity] = useState(props.quantity || 0);
  const [calo, setCalo] = useState(props.calo || 0);

  const handleChangeQuantity = (event) => {
    const value = event.target.value;
    setQuantity(value);
    setCalo(value * food.calo);
  };

  const handleChangeFood = (e) => {
    setFood(Menu.find(item => item.name === e.target.value));
  };

  const handleSaveFoodItem = () => {
    const menuItem = {
      type,
      food,
      quantity,
      date,
    };
    dispatch(saveFoodItem(menuItem));
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">{type}</div>
          <div className="main__selecter">
            <Select
              displayEmpty
              value={food.name}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleChangeFood}
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
                  value={quantity}
                  type="number"
                  onChange={handleChangeQuantity}
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
                  value={calo}
                  type="number"
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
        <Button onClick={handleSaveFoodItem} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
FoodForm.propTypes = {
  onclick: PropTypes.bool,
  onclose: PropTypes.func,
  name: PropTypes.string,
  calo: PropTypes.number,
  quantity: PropTypes.string,
  type: PropTypes.string,
};
export default FoodForm;
