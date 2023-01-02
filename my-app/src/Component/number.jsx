import React,{useState} from 'react'

function Number() {
    const [firstNumber,setFirstNumber] = useState(25)
    const [secondNum,setSecondNum] =useState(23)
  return (
    <div>
      <h3>adding two numbers example</h3>
      <p>{firstNumber + secondNum}</p>
      <h3>Subtraction  two numbers example</h3>
      <p>{firstNumber - secondNum}</p>
      <h3>Multiplication  two numbers example</h3>
      <p>{firstNumber * secondNum}</p>
      <h3>Division  two numbers example</h3>
      <p>{firstNumber / secondNum}</p>
    </div>
  )
}

export default Number
