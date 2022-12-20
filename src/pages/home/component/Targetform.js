import React, { useMemo } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import {
  modes,
  genders,
  types,
  activityModes,
} from "../../../contains/dataConst";
import { useDispatch } from "react-redux";
import { saveTargetItem } from "../../../actions/target/TargetActionCallApi";
import { useEffect } from "react";

function TargetForm(props) {
  const { date, target, customCalo, setCustomCalo } = props;
  const [mode, setMode] = React.useState("フリーモード");
  const [type, setType] = React.useState("カロリー");
  const [gender, setGender] = React.useState("男性");
  const [activityMode, setActivityMode] = React.useState("活動強度");
  const [freeModeCalories, setFreeModeCalories] = useState(0);
  const [carb, setCarb] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if(target){
      setMode(target?.modeType);
      setType(target?.type);
      setGender(target?.gender);
      setActivityMode(target?.activityType);
      setFreeModeCalories(target?.calories);
      setCarb(target?.carb);
      setAge(target?.age);
      setWeight(target?.weight);
      setHeight(target?.height);
      setFat(target?.fat);
      setProtein(target?.protein);
    }
  }, [target]);

  const handleChangeCarb = (event) => {
    setCarb(event.target.value);
  };

  const handleChangeProtein = (event) => {
    setProtein(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleChangeFat = (event) => {
    setFat(event.target.value);
  };

  const handleMode = (event) => {
    setMode(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleChangGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangActivityMode = (e) => {
    setActivityMode(e.target.value);
  };

  const handleChangeCalories = (e) => {
    setFreeModeCalories(e.target.value);
  };

  const resultR = () => {
    switch (activityMode) {
      case activityModes[0].value:
        return 1.2;
      case activityModes[1].value:
        return 1.375;
      case activityModes[2].value:
        return 1.55;
      case activityModes[3].value:
        return 1.725;
      case activityModes[4].value:
        return 1.9;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const valueR = resultR();
    let totalCalo = 0;
    if (protein > 0 || fat > 0 || carb > 0) {
      totalCalo = (carb + protein) * 4 + fat * 9;
    } else {
      let bmr = 0;
      if (gender === "男性") {
        bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
      } else {
        bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
      }
      totalCalo = bmr * valueR;
    }
    setCustomCalo(totalCalo);
  }, [fat, protein, carb, weight, height, gender, age, activityMode]);

  const handleSaveTarget = () => {
    const targetItem = {
      mode, type, gender, activityMode, freeModeCalories, carb, age, height, weight, fat, protein, date
    };

    dispatch(saveTargetItem(targetItem, onclose));
  }

  const renderRecommend = () => {
    return (
      <div className="main__statistics">
        <div className="main__input">
          <div className="main__input-title">性別</div>
          <div className="main__selecter">
            <Select
              displayEmpty
              value={gender}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleChangGender}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="input-wrapper d-flex flex-nowrap">
          <div className="main__input">
            <div className="main__input-title">体重</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                value={weight}
                onChange={(e) => handleChangeWeight(e)}
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
                value={height}
                onChange={(e) => handleChangeHeight(e)}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="input-wrapper d-flex flex-nowrap">
          <div className="main__input">
            <div className="main__input-title">年</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-age"
                value={age}
                onChange={(e) => handleChangeAge(e)}
                endAdornment={
                  <InputAdornment position="end">歳</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="main__input">
            <div className="main__input-title">運動強度</div>
            <div className="main__selecter">
              <Select
                displayEmpty
                value={activityMode}
                sx={{ m: 1, width: "25ch" }}
                onChange={handleChangActivityMode}
              >
                {activityModes.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="mmain__statistics-total">目標:{customCalo}カロリー</div>
      </div>
    );
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
          {mode === "フリーモード" ? (
            <>
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
              {type === "カロリー" ? (
                <div className="main__input main__input--flex">
                  <div>
                    <div className="main__input-title">カロリー</div>
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-calories"
                        value={freeModeCalories}
                        onChange={(e) => handleChangeCalories(e)}
                        endAdornment={
                          <InputAdornment position="end">Cal</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
              ) : (
                <>
                  <div className="main__input main__input--flex">
                    <div>
                      <div className="main__input-title">カープ</div>
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="outlined"
                      >
                        <OutlinedInput
                          id="outlined-adornment-weight"
                          value={carb}
                          onChange={(e) => handleChangeCarb(e)}
                          endAdornment={
                            <InputAdornment position="end">g</InputAdornment>
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
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="outlined"
                      >
                        <OutlinedInput
                          id="outlined-adornment-weight"
                          value={protein}
                          onChange={(e) => handleChangeProtein(e)}
                          endAdornment={
                            <InputAdornment position="end">g</InputAdornment>
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
                      <FormControl
                        sx={{ m: 1, width: "25ch" }}
                        variant="outlined"
                      >
                        <OutlinedInput
                          id="outlined-adornment-weight"
                          value={fat}
                          onChange={(e) => handleChangeFat(e)}
                          endAdornment={
                            <InputAdornment position="end">g</InputAdornment>
                          }
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            "aria-label": "weight",
                          }}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div
                    className="mmain__statistics-total"
                    style={{ textAlign: "center" }}
                  >
                    目標:{customCalo}カロリー
                  </div>
                </>
              )}
            </>
          ) : (
            renderRecommend()
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onclose} xs={{}}>
          キャンセル
        </Button>
        <Button onClick={handleSaveTarget} autoFocus>
          サーブ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
TargetForm.propTypes = {
  onclick: PropTypes.bool,
  onclose: PropTypes.func,
};
export default TargetForm;
