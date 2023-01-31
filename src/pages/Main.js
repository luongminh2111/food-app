import React from "react";
import Header from "./home/Header";
import Home from "./home/Home";
import Recipe from "./recipe";
import Statistics from "./statistics/Statistics";
import Footer from "./home/Footer";
import Forum from "./forum/components";

function Main() {
  const location = window.location;
  const renderBody = () => {
    switch (true) {
      case location.pathname.includes("/"):
        return <Home />;
      case location.pathname.includes("/daily"):
        return <Home />;
      case location.pathname.includes("/statistic"):
        return <Statistics />;
      case location.pathname.includes("/recipe"):
        return <Recipe />;
      case location.pathname.includes("/forum"):
        return <Forum />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="content"> {renderBody()}</div>

        <Footer />
      </div>
    </>
  );
}
export default Main;
