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
import "../styles/_foodCard.scss";
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
        <Card
          key={item?.food?.id}
          sx={{
            cursor: "pointer",
            width: "180px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
                height: "96px",
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
              {item.amount} gram
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "18px", color: "#8d8d8d" }}
            >
              {((item?.food?.calo / 100) * item?.amount).toFixed(2)} calo
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "18px", color: "#8d8d8d" }}
            >
              Đường: {(item?.food?.carb * item?.amount / 100).toFixed(2)} g
              <br />
              Đạm: {(item?.food?.protein * item?.amount / 100).toFixed(2)} g
              <br />
              Béo: {(item?.food?.fat * item?.amount / 100).toFixed(2)} g
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
