import React from "react";

const Greetings = (props) => {
  console.log(props);
  return(
    <div>
  <h1>Hello {props.name} aka {props.heroName} occupation {props.occupationName}</h1>;
  {props.children}
  </div>
  )
};
export default Greetings;
