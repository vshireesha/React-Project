import React from "react";

function Bed(props) {
  return (
    <div>
      <div>Bed</div>
      <div>pillow1 {props.pillowColor1}</div>
      <div>Pillow2 {props.pillowColor2}</div>
      <div>Blanket</div>
      <div>Door</div>
      <div>Window</div>
    </div>
  );
}

export default Bed;
