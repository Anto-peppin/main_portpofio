import React from "react";
import Typewriter from "typewriter-effect";

function TypeWritter() {
  return (
    
      <h1 className="ml-1">
        <Typewriter
          options={{
            strings: ["Full stack developer", "MERN stack developer","Debugger","Good Learner","Duter"],
            autoStart: true,
            loop: true,
            delay: 75, // typing speed
            deleteSpeed: 50,
          }}
        />
      </h1>
   
  );
}

export default TypeWritter;