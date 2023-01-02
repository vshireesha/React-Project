import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from './Components/Button';
import { Greet } from './Components/Greet';
//import { Greeting } from './Components/Greeting';
//import { Person } from './Components/Person';
//import { PersonList } from './Components/PersonList';

function App() {
 
  return (
   
    <div className="App">
      {/* <Button handleClick={(event,id) => {
        console.log('Button Click',event,id)
      }} /> */}
       <Greet /> 
      {/* <Greeting name="Shireesha" messageCount={20} isLoggedIn={false}/> */}
      {/* <Person name = {personName}/> */}
      {/* <PersonList names ={nameList}/> */}
    </div>
  );
}

export default App;
