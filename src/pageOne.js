import React from "react";
// import Food from "./food";

export const Header = () => <h2>Health App</h2>; //header arrow-function

export const CalorieOutput = ({ calorieState, statement }) => (
  <div>
    <h4>{statement}</h4>
    <h2>{calorieState}</h2>
  </div>
);
