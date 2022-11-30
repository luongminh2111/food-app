import React from "react";
import Header from "./Header";
import Main from "./Main";
export default function home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}
