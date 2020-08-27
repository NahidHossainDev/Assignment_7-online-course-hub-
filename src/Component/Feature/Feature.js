import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faMedal,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";
const Feature = () => {
  return (
    <div >
      <div className="feature container">
            <div className="features">
            <div className="icons icons1">
                <FontAwesomeIcon icon={faTv} className="ilogo" />
                </div>
            <div>
                <h5>15+ courses</h5>
                <p>Enjoy variety of topics</p>
            </div>     
        </div>
              
        <div className="features">
            <div className="icons icons2">
                <FontAwesomeIcon icon={faMedal} className="ilogo" />
            </div>
            <div>
                <h5>Expert instruction</h5>
                <p>Find the right instructor</p>
            </div>   
        </div>
              
        <div className="features">
            <div className="icons icons3">
                <FontAwesomeIcon icon={faLifeRing} className="ilogo" />
            </div>
            <div>
                <h5>Lifetime access</h5>
                <p>Learn on your schedule</p>
            </div>
        </div>
              
      </div>
    </div>
  );
};

export default Feature;
