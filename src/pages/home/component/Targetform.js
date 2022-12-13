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
export const TargetForm = (props) => {
  const modes = [
    {
      value: "フリーモード",
    },
    {
      value: "レコメンデーション",
    },
  ];
  const types = [
    {
      value: "マクロ",
    },
    {
      value: "レコメンデーション",
    },
  ];

  const [mode, setMode] = React.useState("フリーモード");
  const [type, setType] = React.useState("マクロ");
  const [values, setValues] = useState({
    cup: "",
    protein: "",
    fat: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMode = (event) => {
    setMode(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">吸収量の目標を設定</div>
          <div className="main__selecter">
            <Select
              displayEmpty
              value={mode}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleMode}
            >
              {modes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="main__selecter">
            <Select
              displayEmpty
              value={type}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleType}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="main__input main__input--flex">
            <div>
              <div className="main__input-title">カープ</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.cup}
                  onChange={handleChange("cup")}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
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
              <div className="main__input-title">プロテイン</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.protein}
                  onChange={handleChange("protein")}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
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
              <div className="main__input-title">ファット</div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
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
TargetForm.propTypes = {
  onclick: PropTypes.bool,
  onclose: PropTypes.func,
};
export default TargetForm;
