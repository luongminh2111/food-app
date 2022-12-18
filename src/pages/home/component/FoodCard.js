import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faX } from "@fortawesome/free-solid-svg-icons";
import FoodForm from "./FoodForm";
const FoodCard = (props) => {
  const [open, setOpen] = React.useState(false);
  console.log("kiem tra props card :", props)
  const handleClickOpen = () => {
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
          width:""
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.FoodName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.quantity * 100} gram
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.calo}カロリー
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
        name={props.FoodName}
        id={props.id}
        quantity={props.quantity}
        calo={props.calo}
      />
    </Card>
  );
};
FoodCard.propTypes = {
  id: PropTypes.number.isRequired,
  FoodName: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  calo: PropTypes.number.isRequired,
};
export default FoodCard;
