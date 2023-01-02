import React, { Component, useState } from "react";
import "./CourseInput.css";

const Courseinput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const goleInputChangeHandler = (e) => {
    setEnteredValue(e.taget.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <div className="form-control">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Enter your Goles</label>
          <br />
          <input type="text" onChange={goleInputChangeHandler} />
        </div>
        <button className="button" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default Courseinput;
