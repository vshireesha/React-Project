//import logo from "./logo.svg"
import React, { useState } from "react";
import "./App.css";
//import { NumberAdd } from "./Component/NumberAdd";
import Number from "./Component/number";
//import CourseInput from "./Component/CourseInput/CourseInput";
//import EmployeDetails from "./Component/EmployeDetails";
//import CheckOut from "./Component/checkOut";
//import ClassMaping from "./Component/ClassMaping";
//import HelloWrold from "./Component/HelloWrold";
//import House from "./HouseDesign/House";

//import img1 from "./images/download.jpg";
// const App=()=>{
//   const [CourseGoals,setCourseGoals] =useState({//
//     {text:'Reactjs Course',id:'g1'},
//     {text:'JavaScript Course',id:'g1'}
//   });
// }

function App() {
  return (
    <div className="App">
      {/* <NumberAdd /> */}
      <Number />
      {/* <CourseInput /> */}
      {/* <EmployeDetails /> */}

      {/* <HelloWrold />
      <ClassMaping /> */}
      {/* <CheckOut /> */}

      {/* <House name="Shireesha Homes" /> */}
      {/* <div className="bg-container">
        <div className="card-container">
          <div className="card">Home</div>
          <div className="card">About Us</div>
          <div className="card">Contact Us</div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="icon">01</div>
          <div className="content">
            <h3>HTML&CSS</h3>
            <p>nline CSS: Define CSS properties using style attribute</p>
            <a href="#">CheckOut</a>
          </div>
        </div>
        <div className="box">
          <div className="icon">02</div>
          <div className="content">
            <h3>JavaScript</h3>
            <p>nline CSS: Define CSS properties using style attribute</p>
            <a href="#">CheckOut</a>
          </div>
        </div>
        <div className="box">
          <div className="icon">03</div>
          <div className="content">
            <h3>React Js</h3>
            <p>Inline CSS: Define CSS properties using style attribute.</p>
            <a href="#">CheckOut</a>
          </div>
        </div>
      </div>
      <div className="bg-container">
        <div className="card-container">
          <p>
            Copyright © 2004-2022 Website.com Solutions Inc. All Rights
            Reserved. All other trademarks and copyrights are the property of
            their respective holders.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
