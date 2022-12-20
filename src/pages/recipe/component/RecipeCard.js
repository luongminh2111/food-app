import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import "../../recipe/style/recipeCard.scss";
import RecipeInfo from "./RecipeInfo";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card sx={{ cursor: "pointer" }} onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          // alt="Paella dish"
        />
        <CardHeader title={props.recipeName} />
        <CardContent>{props.calo}カロリー</CardContent>
      </Card>
      <RecipeInfo
        onclick={open}
        onclose={handleClose}
        id={props.id}
        recipeName={props.recipeName}
        img={props.img}
        tutorial={props.tutorial}
        calo={props.calo}
        ingredients={props.ingredients}
      />
    </div>
  );
}
RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  recipeName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tutorial: PropTypes.string.isRequired,
  calo: PropTypes.number.isRequired,
  ingredients: PropTypes.array,
};
