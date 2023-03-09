import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainFunctional from "./components/mainFunctional";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  
  render() {
    return (
      <div className="App">
        <MainFunctional />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));