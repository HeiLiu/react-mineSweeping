import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h1>react</h1>;
  }
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
