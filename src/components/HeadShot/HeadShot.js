import React from "react";
import Shane from '../HeadShot/Shane.jpg';
import HeadImage from '../HeadShot/HeadShot.css';

const headShots = ( props ) => {
  return (
    <div className="ui centered card">
      <div className="image">
        <img src={Shane}></img>
      </div>
      
    </div>
  );
};

export default headShots;


