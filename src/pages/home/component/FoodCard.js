import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";

const FoodCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.FoodName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.quantity}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.calo}カロリー
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <div className="main__icon-item">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </Button>
      </CardActions>
    </Card>
  );
};
FoodCard.propTypes = {
  id: PropTypes.number.isRequired,
  FoodName: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  calo: PropTypes.string.isRequired,
};
export default FoodCard;
