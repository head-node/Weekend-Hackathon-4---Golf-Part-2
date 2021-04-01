import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
  });
  const reset = () => {
    setRenderBall(false) ; 
    setBallPosition({
      left:0,
      top:0
    })
  };
  const renderChoice = () => {
    setRenderBall(true);
  };
  const eventHandler = (event) => {
    switch (event.keyCode) {
      case 39:
        setBallPosition({
          left: ballPosition.left + 5,
          top: ballPosition.top,
        });
        break;
      case 40:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top + 5,
        });
        break;
      case 37:
        setBallPosition({
          left: ballPosition.left - 5,
          top: ballPosition.top,
        });
        break;
      case 38:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top - 5,
        });
        break;
      default:
        break;
    }
  }; 
  useEffect(()=>{
   document.addEventListener("keydown",eventHandler) 
   return (()=>document.removeEventListener("keydown",eventHandler))
  })
//  when we use empty dependency then online after component being mounted 
//useEffect would be called 
// at the time the default value would be 0 for left and right 
// and even state changes on keydown 
// the left and right in even handler would be still 0 due to the closure property
// but when we dont use dependency array then in each state change 
// useEffect gonna execute 
// and with new addlistener, the latest value of left and right are gonna be stored in
// the function as a closure.
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button> 
      
     
      {renderBall === true ? <p style={{
        left:ballPosition.left+"px",
        top:ballPosition.top + "px",
        position:"absolute"
      }} className="ball"></p> :  <button className="start" onClick={() => renderChoice()}>
      Start
    </button>}
    </div>
  );
};

export default App;
