import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faX } from "@fortawesome/free-solid-svg-icons";
import FoodForm from "./FoodForm";
const FoodCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const {date, item } = props;
  console.log("kiem tra props card :", props);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: ["Kosugi Maru", "M PLUS 1p"],
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.amount * 100} gram
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.calo * item.amount}カロリー
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <FontAwesomeIcon
          icon={faPen}
          className="main__parameter-icon"
          onClick={handleClickOpen}
        />
        <FontAwesomeIcon
          icon={faX}
          className="main__parameter-icon"
          onClick={handleClickOpen}
        />
      </CardActions>
      <FoodForm
        onclick={open}
        onclose={handleClose}
        item={item}
        date={date}
        update
      />
    </Card>
  );
};

export default FoodCard;
