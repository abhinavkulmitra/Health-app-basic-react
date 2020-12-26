import React from "react";

export default function Food(props) {
  let sum = props.totalCalorieIntake; //sum is sum of calories; to store value
  sum += props.fooditemCalories;
  return (
    <div onClick={() => props.onFoodPillClick(sum)}>
      name: {props.fooditemName}, calories: {props.fooditemCalories}, price:
      {props.fooditemPrice}
    </div>
  );
}
