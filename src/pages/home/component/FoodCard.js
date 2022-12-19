import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import FoodForm from "./FoodForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { borderColor } from "@material-ui/system";

const FoodCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const { date, listFoodOfDay, listFood, type } = props;
  const [foodSelected, setFoodSelected] = useState([]);
  const [idFood, setIdFood] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleClickOpen = (id) => {
    setFoodSelected(listFoodOfDay.find((e) => e.food.id === id));
    setIsUpdate(true);
    setOpen(true);
  };
  const handleDelete = (id) => {
    const itemDelete = listFoodOfDay.find((e) => e.food.id === id);
    setFoodSelected(itemDelete);
    setIdFood(itemDelete.id);
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return listFoodOfDay?.length > 0
    ? listFoodOfDay?.map((item) => (
        <Card key={item?.food?.id}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontFamily: ["Kosugi Maru", "M PLUS 1p"],
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                height: "64px",
                lineBreak: "strict",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {item?.food?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "18px", color: "#8d8d8d" }}
            >
              {item.amount * 100} グラム
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "18px", color: "#8d8d8d" }}
            >
              {item?.food?.calo * item?.amount}カロリー
            </Typography>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <div className="foodCard-icon">
              <FontAwesomeIcon
                icon={faPen}
                className="foodCard-icon-item"
                onClick={() => handleClickOpen(item?.food?.id)}
              />
            </div>

            <div className="foodCard-icon">
              <FontAwesomeIcon
                icon={faX}
                className="foodCard-icon-item"
                onClick={() => handleDelete(item?.food?.id)}
              />
            </div>
          </CardActions>
          <ConfirmDeleteModal
            open={openDeleteModal}
            setOpen={setOpenDeleteModal}
            id={idFood}
          />
          <FoodForm
            onclick={open}
            onclose={handleClose}
            type={type}
            foodSelected={foodSelected}
            date={date}
            isUpdate={isUpdate}
            listFood={listFood}
          />
        </Card>
      ))
    : null;
};

export default FoodCard;
