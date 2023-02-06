import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";
import {
  saveFoodItem,
  addFoodItem,
  getListFood,
} from "../../../actions/food/FoodActionCallApi";
import { modes } from "../../../contains/dataConst";
import "../styles/FoodFormStyle.scss";

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
  const [image, setImage] = useState("");
  const [showFood, setShowFood] = useState(false);
  const [foodChosen, setFoodChosen] = useState("");

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
  };

  const handleChangeCalo = (event) => {
    setCalo(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangeCarb = (event) => {
    setCarb(event.target.value);
  };

  const handleChangeProtein = (event) => {
    setProtein(event.target.value);
  };

  const handleChangeFat = (event) => {
    setFat(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    const value = event.target.value;
    setQuantity(value);
    const foodItem = listFood?.find((e) => e.name === name);
    setCaloCustom(((value * foodItem.calo) / 100).toFixed(2));
  };

  const handleSaveFoodItem = (e) => {
    e.preventDefault();
    let menuItem = {};
    if (mode === "Tự nhập") {
      menuItem = {
        weight,
        name,
        protein,
        carb,
        fat,
        image,
        calo,
      };
      dispatch(addFoodItem(menuItem, isUpdate, onclose, date));
      setName("");
      setWeight(0);
      setCalo(0);
      setFat(0);
      setProtein(0);
      setImage("");
      setMode("Đề xuất");
    } else {
      menuItem = {
        id: foodChosen?.id || foodSelected?.id,
        type,
        quantity,
        foodId: foodChosen?.id || foodItem.id,
        date,
      };
      dispatch(saveFoodItem(menuItem, isUpdate, onclose));
    }

    setQuantity(0);
    setCaloCustom(0);
    setName(listFood[0]?.name);
  };
  const handleMode = (event) => {
    setMode(event.target.value);
  };

  const handleShowDropDownFood = () => {
    setShowFood(!showFood);
  };

  const handleSelectFood = (item) => {
    setFoodChosen(item);
    setShowFood(false);
  };

  const handleCancelModal = () => {
    setMode("Đề xuất");
    onclose();
  };

  const renderRecommend = () => {
    return (
      <div className="food-select-form">
        <div className="chosen-food">
          <div className="food-image">
            <img
              src={
                foodChosen
                  ? foodChosen?.image
                  : foodSelected
                  ? foodSelected?.food?.image
                  : listFood[0]?.image ||
                    "../../../contains/IMAGE_FOOD_DEFAULT.jpg"
              }
              // src="../../../contains/IMAGE_FOOD_DEFAULT.jpg"
            />
          </div>
          <Button
            onClick={() => handleShowDropDownFood()}
            className="food-name"
            variant="outlined"
          >
            {foodChosen
              ? foodChosen?.name
              : foodSelected
              ? foodSelected?.food?.name
              : listFood[0]?.name}
          </Button>
          {showFood ? (
            <div className="list-food-drop-down">
              {listFood?.map((item, index) => (
                <div
                  className="drop-item"
                  key={index}
                  onClick={() => handleSelectFood(item)}
                >
                  <div className="item-food-image">
                    <img
                      src={
                        item?.image ||
                        "../../../contains/IMAGE_FOOD_DEFAULT.jpg"
                      }
                    />
                  </div>
                  <div className="item-food-name">{item?.name}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="food-properties">
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
      </div>
    );
  };

  return (
    <Dialog open={props.onclick} onClose={props.onclose} id="add-food-modal">
      <DialogContent>
        <div className="food-wrapper">
          <div className="food-type">{type}</div>
          <div className="food-mode">
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
            <div className="custom-form-food">
              <div className="food-info">
                <div className="name">
                  <div className="main__input-title">Tên món ăn</div>
                  <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
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
                <div className="image">
                  <div className="image-preview">
                    <img
                      src={image || "../../../contains/IMAGE_FOOD_DEFAULT.jpg"}
                    ></img>
                  </div>
                  <div>
                    <div className="main__input-title">Nhập link ảnh</div>
                    <FormControl
                      sx={{ m: 1, width: "30ch" }}
                      variant="outlined"
                    >
                      <TextField
                        value={image}
                        onChange={(e) => {
                          handleChangeImage(e);
                        }}
                      ></TextField>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="food-properties">
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
                        type="number"
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
                        type="number"
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
                        type="number"
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
                        type="number"
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
                </div>{" "}
              </div>
            </div>
          ) : (
            renderRecommend()
          )}
        </div>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => {
            handleCancelModal();
          }}
          variant="outlined"
          color="error"
        >
          HỦY
        </Button>
        <Button
          onClick={(e) => handleSaveFoodItem(e)}
          variant="contained"
          autoFocus
        >
          LƯU
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FoodForm;
