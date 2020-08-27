import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Feature from "./Component/Feature/Feature";
import Courses from "./Component/Courses/Courses";
import Calculate from "./Component/Calculate/Calculate";
import Data from "./Component/FakeData/Data";
import { useState } from "react";

function App() {

  const id = (10 + Math.random() * 10000);
  const [courseFee, settingCorse] = useState([]);
  const handeller = (data) => {
    settingCorse([...courseFee,data]);
  };
  
  return (
    <div className="App">
      <Home></Home>
      <Feature></Feature>
      <Courses data={Data} handel={handeller} key={id}></Courses>
      <Calculate data ={courseFee} ></Calculate>
    </div>
  );
}

export default App;
