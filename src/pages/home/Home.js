import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import TargetForm from "./component/TargetForm";
import FoodForm from "./component/FoodForm";
import Date from "./component/DateSetting";
import Header from "./Header";
import Main from "./Main";
function Home() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}
export default Home;
