type GreetingProps ={
  name:string
  messageCount:number
  isLoggedIn:boolean
  
}
export const Greeting = (props:GreetingProps) => {
  return (
    <div>
       <h2>
        {
          props.isLoggedIn ?
          `Welcome {props.name}! You have {props.messageCount} unread messages` :"Welcome Obireddy"
        }
        </h2>
    </div>

  ) 
};
