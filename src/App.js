import React from "react";
import "./styles.css";
import Header from "./pageOne";
import PageNav from "./example";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageNav></PageNav>
      </div>
    );
  }
}
