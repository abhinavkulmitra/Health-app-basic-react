import React from "react";
import "./styles.css";
import Food from "./food";
import food from "./data/database";

const Header = () => <h2>Health App</h2>; //header arrow-function

const ListOfFood = ({ array, foodPillHandler, userCalorie }) =>
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
const CalorieOutput = ({ calorieState, statement }) => (
  <div>
    <h4>{statement}</h4>
    <h2>{calorieState}</h2>
  </div>
);

export default class App extends React.Component {
  state = {
    statement: "",
    totalCalorie: 0
  };

  clickEventHandler = (clickedCalorie) => {
    return (
      <h1>
        {this.setState({
          totalCalorie: clickedCalorie,
          statement: "Your total calorie consumption for today is :"
        })}
      </h1>
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ListOfFood
          array={food}
          foodPillHandler={this.clickEventHandler}
          userCalorie={this.state.totalCalorie}
        />
        <CalorieOutput
          calorieState={this.state.totalCalorie}
          statement={this.state.statement}
        />
      </div>
    );
  }
}
