import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
export default function Foodform(props) {
  const [values, setValues] = React.useState({
    weight: "",
    height: "",
    age: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics">
          <div className="main__statistics-title">吸収量の目標を設定</div>
          <div className="main__selecter">
            <TextField
              sx={{ m: 1, width: "25ch" }}
              select
              onChange={handleChange}
            ></TextField>
          </div>

          <div className="main__selecter">
            <TextField
              sx={{ m: 1, width: "25ch" }}
              select
              onChange={handleChange}
            ></TextField>
          </div>
          <div className="main__input">
            <div className="main__input-title">体重</div>
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
          <div className="main__input">
            <div className="main__input-title">身長</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-height"
                value={values.height}
                onChange={handleChange("height")}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="main__input">
            <div className="main__input-title">年</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-age"
                value={values.age}
                onChange={handleChange("age")}
                endAdornment={
                  <InputAdornment position="end">歳</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="main__input">
            <div className="main__input-title">運動強度</div>
            <div className="main__selecter">
              <TextField
                sx={{ m: 1, width: "25ch" }}
                select
                onChange={handleChange}
              ></TextField>
            </div>
          </div>
          <div className="mmain__statistics-total">目標:2311カロリー</div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onclose}>キャンセル</Button>
        <Button onClick={props.onclose} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
Foodform.propTypes = {
  onclick: PropTypes.func,
  onclose: PropTypes.func,
};
