import React from "react";
import Bed from "./Bed";

function BedRoom(props) {
  return (
    <div className="container">
      <div className="flexBox">
        <h3>BedRoom1 {props.bedRoomColor}</h3>
        <Bed pillowColor1="red" pillowColor2="blue" />
        <div>WashRoom</div>
      </div>
      <div className="flexBox">
        <h3>BedRoom2 {props.bedRoomColor1}</h3>
        <Bed pillowColor1="Gray" pillowColor2="LightGray" />
        <div>Wardrobe</div>
      </div>
      <div className="flexBox">
        <h3>BedRoom3 {props.bedRoomColor2}</h3>
        <Bed pillowColor1="Violet" pillowColor2="Gray" />
      </div>
    </div>
  );
}

export default BedRoom;
