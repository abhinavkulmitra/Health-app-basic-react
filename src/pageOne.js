import React from "react";
import Food from "./food";

export const Header = () => <h2>Health App</h2>; //header arrow-function

export const ListOfFood = ({ array, foodPillHandler, userCalorie }) =>
  array.map(({ name, calories, price }) => (
    <Food
      key={name}
      fooditemName={name}
      fooditemCalories={calories}
      fooditemPrice={price}
      onFoodPillClick={foodPillHandler}
      totalCalorieIntake={userCalorie}
    />
  ));
export const CalorieOutput = ({ calorieState, statement }) => (
  <div>
    <h4>{statement}</h4>
    <h2>{calorieState}</h2>
  </div>
);
