import { useState } from "react"
export const Greet =()=>{
    // const [firstNum,setFirstNum] =useState(23)
    // const [secondNum,setSecondNum] =useState(10)
    const firstNum = 23;
    const secondNum =12;
    return(
        <div>
            <h2>adding two numbers example</h2>
            { firstNum + secondNum }
            <h3>Subtraction  two numbers example</h3>
            { firstNum - secondNum }
            <h3>Multiplication  two numbers example</h3>
            { firstNum * secondNum }
            <h3>Division  two numbers example</h3>
            { firstNum / secondNum }
            
        </div>
    )
}