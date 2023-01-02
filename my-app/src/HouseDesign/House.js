import React from "react";
import BedRoom from "./BedRoom";
import DrawingArea from "./DrawingArea";
import Kitchen from "./Kitchen";

function House(props) {
  return (
    <div>
      <h1>HouseDesign {props.name}</h1>
      <div className="container">
        <BedRoom
          bedRoomColor="pink"
          bedRoomColor1="orange"
          bedRoomColor2="Green"
        />
        <div className="flexBox">
          <Kitchen kitchenColor="block" />
        </div>
        <div className="flexBox">
          <DrawingArea drawingColor="blue" />
        </div>
      </div>
    </div>
  );
}

export default House;
