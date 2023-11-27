import React from "react";

const Greetings = ({name,heroName,occupation,message,emoji})=> {
  
  return(
    <div>
  <h1>{name},{heroName},{occupation},{message}{emoji}</h1>
  </div>
  )
};
export default Greetings;
