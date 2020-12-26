import React from "react";

export default function Food(props) {
  return (
    <div onClick={() => props.onFoodPillClick(props.fooditemName)}>
      name: {props.fooditemName}, calories: {props.fooditemCalories}, price:
      {props.fooditemPrice}
    </div>
  );
}
