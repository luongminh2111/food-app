import React from "react";
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
