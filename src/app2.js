import React from "react";
import { CalorieOutput } from "./pageOne";
import food from "./data/database";
import Food from "./food";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// NextBtn for step 2

function NextBtn() {
  NextPage = () => <div>Hello world !</div>;

  return (
    <div>
      <Router>
        <button>
          <Link to="./step-2">Next</Link>
        </button>

        <Switch>
          <Route exact path="./step-2">
            <NextPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function TodaysCalorieIntake() {
  return (
    <div>
      <h2>Daily calorie intake calculation</h2>
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
              <TodaysCalorieIntake />
            </Route>
            <Route exact path="/calories">
              {/* STEP 1 */}
              <ListOfFood
                array={food}
                foodPillHandler={this.clickEventHandler}
                userCalorie={this.state.totalCalorie}
              />
              <CalorieOutput
                calorieState={this.state.totalCalorie}
                statement={this.state.statement}
              />
              {/* for next step: STEP 2 */}
              <NextBtn />
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
