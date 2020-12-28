import React from "react";
import "./styles.css";
import food from "./data/database";
import { Header, ListOfFood, CalorieOutput } from "./pageOne";
import router from "react-router-dom";

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
