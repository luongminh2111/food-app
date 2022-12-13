import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

import { Menu } from "../data/Menu";
export const FoodForm = (props) => {
  const types = [
    {
      value: "マクロ",
    },
    {
      value: "レコメンデーション",
    },
  ];

  const [menu, setMenu] = React.useState(props.name ? props.name : "ご飯");
  const [values, setValues] = useState({
    quantity: props.quantity,
    calo: props.calo,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMenu = (event) => {
    setMenu(event.target.value);
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">Add food</div>
          <div className="main__selecter">
            <Select
              displayEmpty
              value={menu}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleMenu}
            >
              {Menu.map((option) => (
                <MenuItem key={option.foodName} value={option.foodName}>
                  {option.foodName}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="main__input main__input--flex">
            <div>
              <div className="main__input-title">quantity</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.quantity}
                  onChange={handleChange("quantity")}
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
                  value={values.calo}
                  onChange={handleChange("calo")}
                  aria-describedby="outlined-weight-helper-text"
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
        <Button onClick={props.onclose} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
};
FoodForm.propTypes = {
  onclick: PropTypes.bool,
  onclose: PropTypes.func,
  name: PropTypes.string,
  calo: PropTypes.number,
  quantity: PropTypes.string,
};
export default FoodForm;
