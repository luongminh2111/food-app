import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import TargetForm from "./component/TargetForm";
import FoodForm from "./component/FoodForm";
import Date from "./component/DateSetting";
import Header from "./Header";
import Main from "./Main";
function Home() {
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
