import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [values, setValues] = React.useState({
    weight: "",
    height: "",
    age: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <div className="main">
      <div className="main__date">
        <div className="main__date-screen">
          <CalendarMonthIcon />
          <span>今日</span>
        </div>
      </div>
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
          <span className="main__title">朝ごはん：730カロリー</span>
          <ul className="main__menu">
            <li className="main__desc">卵</li>
            <li className="main__desc">果物</li>
            <li className="main__desc">ご飯</li>
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPen} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">昼ごはん：</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">晩ごはん：</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
        <li className="main__form-item">
          <span className="main__title">他</span>
          <ul className="main__menu">
            <li className="main__icon">
              <div className="main__icon-item" onClick={handleClickOpen1}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose} autoFocus>
            サーブ
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open1} onClose={handleClose1}>
        <DialogContent>
          <div className="main__statistics main__statistics--column">
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

            <div className="main__input main__input--flex">
              <div>
                <div className="main__input-title">カープ</div>
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
            <div className="main__input main__input--flex">
              <div>
                <div className="main__input-title">プロテイン</div>
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
          <Button onClick={handleClose1}>キャンセル</Button>
          <Button onClick={handleClose1} autoFocus>
            サーブ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
