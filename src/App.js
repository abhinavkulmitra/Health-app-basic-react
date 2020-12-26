import React from "react";
import "./styles.css";
import Food from "./food";
import food from "./data/database";

const Header = () => <h2>Health App</h2>; //header arrow-function

const FoodArray = ({ array, foodPillHandler }) =>
  array.map(({ name, calories, price }) => (
    <Food
      key={name}
      fooditemName={name}
      fooditemCalories={calories}
      fooditemPrice={price}
      onFoodPillClick={foodPillHandler}
    />
  ));

const FoodClicked = ({ foodState }) => <h2>{foodState}</h2>;

export default class App extends React.Component {
  state = {
    foodClicked: "nothing"
  };

  clickEventHandler = (name) => (
    <h1> {this.setState({ foodClicked: name })} </h1>
  );

  render() {
    return (
      <div className="App">
        <Header />
        <FoodArray array={food} foodPillHandler={this.clickEventHandler} />
        <FoodClicked foodState={this.state.foodClicked} />
      </div>
    );
  }
}

// DONE- create components of everything. clean up everything
// and use props to make it work
