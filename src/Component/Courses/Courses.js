import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Courses.css";
import Cart from "../Cart/Cart";


// Calculation :

const Courses = (props) => {
  
  return (
    <div className="container">
      <div className="courses">
        <div className="headline">
          <h3>The best courses that we are offering.</h3>
        </div>
        <div className="courses-card">
          {props.data.map((data) => (<Cart data={data} key= {props.key} handel={props.handel}></Cart>))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
