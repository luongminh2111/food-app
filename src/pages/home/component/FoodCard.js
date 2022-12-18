import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPen, faX } from "@fortawesome/free-solid-svg-icons";
import FoodForm from "./FoodForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const FoodCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const {date, listFoodOfDay, listFood, type } = props;
  const [foodSelected, setFoodSelected] = useState([]);
  const [idFood, setIdFood] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleClickOpen = (id) => {
    setFoodSelected(listFoodOfDay.find(e => e.food.id === id));
    setIsUpdate(true);
    setOpen(true);
  };
  const handleDelete = (id) => {
    const itemDelete = listFoodOfDay.find(e => e.food.id === id);
    setFoodSelected(itemDelete);
    setIdFood(itemDelete.id);
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    listFoodOfDay?.length > 0 ?
    listFoodOfDay?.map((item) => (
    <Card sx={{ maxWidth: 345 }} key={item?.food?.id}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: ["Kosugi Maru", "M PLUS 1p"],
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {item?.food?.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.amount * 100} グラム
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item?.food?.calo * item?.amount}カロリー
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <FontAwesomeIcon
          icon={faPen}
          className="main__parameter-icon"
          onClick={() => handleClickOpen(item?.food?.id)}

        />
        <FontAwesomeIcon
          icon={faX}
          className="main__parameter-icon"
          onClick={() => handleDelete(item?.food?.id)}
        />
      </CardActions>
      <ConfirmDeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} id={idFood} />
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
    )
    ) : null
  );
};

export default FoodCard;
