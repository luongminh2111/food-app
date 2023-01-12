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
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";
import { saveFoodItem } from "../../../actions/food/FoodActionCallApi";
import {
  modes,
  genders,
  types,
  activityModes,
} from "../../../contains/dataConst";
function FoodForm(props) {
  const { type, date, onclose, isUpdate, listFood, foodSelected } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [caloCustom, setCaloCustom] = useState(0);
  const [foodItem, setFoodItem] = useState([]);
  const [carb, setCarb] = useState(0);
  const [weight, setWeight] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [calo, setCalo] = useState(0);
  const [mode, setMode] = useState("Đề xuất");
  const [image, setImage] = useState('');

  useEffect(() => {
    if (foodSelected?.food?.id > 0) {
      setName(foodSelected.food.name);

      setQuantity(foodSelected.amount);
      setCaloCustom(
        ((foodSelected.amount * foodSelected.food.calo) / 100).toFixed(2)
      );
    } else {
      setName(listFood[0]?.name);
      setIndex(0);
    }
  }, [listFood, foodSelected]);

  useEffect(() => {
    setFoodItem(listFood?.find((e) => e.name === name));
    setIndex(
      listFood.findIndex((item) => {
        return item.name === name;
      })
    );
  }, [name, index]);
  const handleChangeFoodName = (event) => {
    setName(event.target.value);
    // dispatch(updatePropertiesTarget("calo", event.target.value));
  };

  const handleChangeImage = (value) => {
    setImage(value);
  };

  const handleChangeCalo = (event) => {
    setCalo(event.target.value);
    // dispatch(updatePropertiesTarget("calo", event.target.value));
  };
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
    // dispatch(updatePropertiesTarget("weight", event.target.value));
  };
  const handleChangeCarb = (event) => {
    setCarb(event.target.value);
    // dispatch(updatePropertiesTarget("carb", event.target.value));
  };

  const handleChangeProtein = (event) => {
    setProtein(event.target.value);
    // dispatch(updatePropertiesTarget("protein", event.target.value));
  };
  const handleChangeFat = (event) => {
    setFat(event.target.value);
    // dispatch(updatePropertiesTarget("fat", event.target.value));
  };

  const handleChangeQuantity = (event) => {
    const value = event.target.value;
    setQuantity(value);
    const foodItem = listFood?.find((e) => e.name === name);
    setCaloCustom(((value * foodItem.calo) / 100).toFixed(2));
  };

  const handleChangeFood = (e, val) => {
    setName(val.name);
  };

  const handleSaveFoodItem = (e) => {
    e.preventDefault();
    let menuItem = {};
    if(mode === "Tự nhập"){
      menuItem = {
        weight,
        name,
        protein,
        carb,
        fat,
      };
    } else {
      menuItem = {
        id: foodSelected?.id,
        type,
        quantity,
        foodId: foodItem.id,
        date,
      };
    }
    
    console.log("check menuItem : ", menuItem);
    // dispatch(saveFoodItem(menuItem, isUpdate, onclose));
    setQuantity(0);
    setCaloCustom(0);
    setName(listFood[0]?.name);
  };
  const handleMode = (event) => {
    setMode(event.target.value);
    // dispatch(updatePropertiesTarget("type", "calo"));
    // dispatch(updatePropertiesTarget("mode", event.target.value));
  };
  const renderRecommend = () => {
    return (
      <div className="main__statistics main__statistics--column">
        <Autocomplete
          defaultValue={listFood[index]}
          id="food-select"
          sx={{ m: 1, width: "30ch" }}
          options={listFood}
          onChange={(e, val) => handleChangeFood(e, val)}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              defaultValue={name}
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />

        <div className="main__input main__input--flex">
          <div>
            <div className="main__input-title">Lượng (gam)</div>
            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
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
            <div className="main__input-title">calo</div>
            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
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
    );
  };

  return (
    <Dialog
      open={props.onclick}
      onClose={props.onclose}
      sx={{ margin: "0 auto", width: "700px" }}
    >
      <DialogContent>
        <div className="main__statistics main__statistics--column">
          <div className="main__statistics-title">{type}</div>

          <div className="main__selecter">
            <Select
              displayEmpty
              value={mode}
              sx={{ m: 1, width: "15ch" }}
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
            <div>
              <>
                <div className="main__selecter"></div>

                <div className="main__input main__input--flex">
                  <div>
                    <div className="main__input-title">Tên món ăn</div>
                    <FormControl
                      sx={{ m: 1, width: "30ch" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        value={name}
                        onChange={(e) => handleChangeFoodName(e)}
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
                    <div className="main__input-title">Khối lượng</div>
                    <FormControl
                      sx={{ m: 1, width: "30ch" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        value={weight}
                        onChange={(e) => handleChangeWeight(e)}
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
                    <div className="main__input-title">Calo</div>
                    <FormControl
                      sx={{ m: 1, width: "30ch" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        value={calo}
                        onChange={(e) => handleChangeCalo(e)}
                        endAdornment={
                          <InputAdornment position="end">calo</InputAdornment>
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
                    <div className="main__input-title">Đường</div>
                    <FormControl
                      sx={{ m: 1, width: "30ch" }}
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
                      sx={{ m: 1, width: "30ch" }}
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
                      sx={{ m: 1, width: "30ch" }}
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
                <div>
                  <div className="main__input-title">Nhập link ảnh</div>
                  <FormControl
                      sx={{ m: 1, width: "30ch" }}
                      variant="outlined"
                    ><TextField value={image} onChange={(e) => handleChangeImage(e.target.value)}></TextField></FormControl>
                  
                </div>
              </>
            </div>
          ) : (
            renderRecommend()
          )}
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onclose} xs={{}}>
          HỦY
        </Button>
        <Button onClick={(e) => handleSaveFoodItem(e)} autoFocus>
          LƯU
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FoodForm;
