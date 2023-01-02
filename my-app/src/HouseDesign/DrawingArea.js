import React from "react";

function DrawingArea(props) {
  return (
    <div className="container">
      <div className="flexBox">
        <h3>DrawingArea {props.drawingColor}</h3>
        <div>Sofas</div>
        <div>Table</div>
        <div>Tv</div>
      </div>
    </div>
  );
}

export default DrawingArea;
