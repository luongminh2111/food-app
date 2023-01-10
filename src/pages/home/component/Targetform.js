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
import { updatePropertiesTarget } from "../../../actions/target/TargetAction";

function TargetForm(props) {
  const { date, target, customCalo, setCustomCalo } = props;
  const [mode, setMode] = React.useState("Tự nhập");
  const [type, setType] = React.useState("calo");
  const [gender, setGender] = React.useState("Nam");
  const [activityMode, setActivityMode] = React.useState("Vận động nhẹ");

  const [freeModeCalories, setFreeModeCalories] = useState(0);
  const [carb, setCarb] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setMode(target?.modeType || "Tự nhập");
    setType(target?.type || "calo");
    setGender(target?.gender || "Nam");
    setActivityMode(target?.activityType || "Vận động nhẹ");
    setFreeModeCalories(target?.calories || 0);
    setCarb(target?.carb || 0);
    setAge(target?.age || 0);
    setWeight(target?.weight || 0);
    setHeight(target?.height || 0);
    setFat(target?.fat || 0);
    setProtein(target?.protein || 0);
  }, [target]);

  const handleChangeCarb = (event) => {
    setCarb(event.target.value);
    dispatch(updatePropertiesTarget("carb", event.target.value));
  };

  const handleChangeProtein = (event) => {
    setProtein(event.target.value);
    dispatch(updatePropertiesTarget("protein", event.target.value));
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
    dispatch(updatePropertiesTarget("age", event.target.value));
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
    dispatch(updatePropertiesTarget("weight", event.target.value));
  };

  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
    dispatch(updatePropertiesTarget("height", event.target.value));
  };

  const handleChangeFat = (event) => {
    setFat(event.target.value);
    dispatch(updatePropertiesTarget("fat", event.target.value));
  };

  const handleMode = (event) => {
    if (event.target.value === "Tự nhập") {
      setGender(null);
      setWeight(0);
      setHeight(0);
      setAge(0);
      setActivityMode(null);
      setProtein(0);
      setFat(0);
      setCarb(0);
    } else {
      setFreeModeCalories(0);
      setProtein(0);
      setFat(0);
      setCarb(0);
    }
    setMode(event.target.value);
    dispatch(updatePropertiesTarget("type", "calo"));
    dispatch(updatePropertiesTarget("mode", event.target.value));
  };
  const handleType = (event) => {
    if (event.target.value === "marco") {
      setFreeModeCalories(0);
      setGender(null);
      setWeight(0);
      setHeight(0);
      setAge(0);
      setActivityMode(null);
    }
    setType(event.target.value);
    dispatch(updatePropertiesTarget("type", event.target.value));
  };

  const handleChangGender = (e) => {
    dispatch(updatePropertiesTarget("gender", e.target.value));
    setGender(e.target.value);
  };

  const handleChangActivityMode = (e) => {
    dispatch(updatePropertiesTarget("activityType", e.target.value));
    setActivityMode(e.target.value);
  };

  const handleChangeCalories = (e) => {
    setFreeModeCalories(e.target.value);
    dispatch(updatePropertiesTarget("calo", e.target.value));
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
    if (freeModeCalories > 0) {
      totalCalo = freeModeCalories;
    } else if (protein > 0 || fat > 0 || carb > 0) {
      totalCalo = (carb + protein) * 4 + fat * 9;
    } else if (mode === "Đề xuất") {
      let bmr = 0;
      if (gender === "Nam") {
        bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
      } else {
        bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
      }
      totalCalo = bmr * valueR;
      dispatch(updatePropertiesTarget("calo", Math.round(totalCalo)));
    }
    setCustomCalo(Math.round(totalCalo));
  }, [
    fat,
    protein,
    carb,
    weight,
    height,
    gender,
    age,
    activityMode,
    freeModeCalories,
  ]);

  const handleSaveTarget = () => {
    const targetItem = {
      mode,
      type,
      gender,
      activityMode,
      freeModeCalories,
      carb,
      age,
      height,
      weight,
      fat,
      protein,
      date,
      id: target?.id,
    };
    dispatch(saveTargetItem(targetItem, props.onclose, date));
  };

  const renderRecommend = () => {
    return (
      <div className="main__statistics">
        <div className="main__input">
          <div className="main__input-title">Giới tính</div>
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
            <div className="main__input-title">Cân nặng</div>
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
            <div className="main__input-title">Chiều cao</div>
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
            <div className="main__input-title">Tuổi</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-age"
                value={age}
                onChange={(e) => handleChangeAge(e)}
                endAdornment={
                  <InputAdornment position="end">tuổi</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="main__input">
            <div className="main__input-title">Cường độ vận động</div>
            <div className="main__selecter">
              <Select
                value={activityMode}
                label="Chọn cường độ"
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
        <div className="mmain__statistics-total">
          Mục tiêu:{customCalo} calo
        </div>
      </div>
    );
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose}>
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">Đặt mục tiêu ăn uống</div>
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
          {mode === "Tự nhập" ? (
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
              {type === "calo" ? (
                <div className="main__input main__input--flex">
                  <div>
                    <div className="main__input-title">calo</div>
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
                          "aria-label": "calories",
                        }}
                      />
                    </FormControl>
                  </div>
                </div>
              ) : (
                <>
                  <div className="main__input main__input--flex">
                    <div>
                      <div className="main__input-title">Đường</div>
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
                      <div className="main__input-title">Đạm</div>
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
                      <div className="main__input-title">Béo</div>
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
                    Mục tiêu:{customCalo}calo
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
          Hủy
        </Button>
        <Button onClick={handleSaveTarget} autoFocus>
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default TargetForm;
