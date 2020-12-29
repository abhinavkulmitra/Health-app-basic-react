import React from "react";
import { CalorieOutput } from "./pageOne";
import food from "./data/database";
import Food from "./food";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

ListOfFood = ({ array, foodPillHandler, userCalorie }) =>
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

function Comparision() {
  return (
    <div>
      <h2>Comparision</h2>
    </div>
  );
}
class PageNav extends React.Component {
  state = {
    statement: "",
    totalCalorie: 0
  };

  clickEventHandler = (clickedCalorie) => {
    return (
      <h1>
        {" "}
        {this.setState({
          totalCalorie: clickedCalorie,
          statement: "Your total calorie consumption for today is :"
        })}
      </h1>
    );
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calories">Calories</Link>
            </li>
            <li>
              <Link to="/comparision">Comparision</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calories">
              <ListOfFood
                array={food}
                foodPillHandler={this.clickEventHandler}
                userCalorie={this.state.totalCalorie}
              />
              <CalorieOutput
                calorieState={this.state.totalCalorie}
                statement={this.state.statement}
              />
            </Route>
            <Route exact path="/comparison">
              <Comparision />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PageNav;
