import React from "react";
import Header from "./home/Header";
import Home from "./home/Home";
import Recipe from "./recipe";
import Statistics from "./statistics/Statistics";
import '../styles/_main.scss';
import Footer from "./home/Footer";

function Main(){
  const location = window.location;
  const renderBody = () => {
    switch(true){
      case location.pathname.includes('/') :
        return <Home />;
      case location.pathname.includes('/daily') : 
        return <Home />;
      case location.pathname.includes('/statistic'): 
        return <Statistics />;
      case location.pathname.includes('/recipe'): 
        return <Recipe />;
      default: 
        return <Home />;
    }
  }
  return(
    <>
      <Header />
      {renderBody()}
      <Footer />
    </>
  )
}
export default Main;