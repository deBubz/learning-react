import React from "react";
import "./Person.css"

const Person = (props) => {
  const { name, age } = props;
  return (
    <div onClick={props.click} className="Person">
      <p>
        This is a {name}. I am {age} years old{" "}
      </p>
      <h1>{props.children}</h1>
      <input type="text" onChange={props.change}/>
    </div>
  );
};

export default Person;
