import React, { Component } from "react";

import Header from "./components/Header/Header";
import { Visualization } from "./components/Visualization";

import "bulma";
import "./App.scss";

interface AppProps {}

interface State {
}

class App extends Component<AppProps, State> {
  render() {
    return (
      <div>
        <div className="App">
          <Header></Header>
          <Visualization></Visualization>
        </div>
      </div>
    );
  }
}

export default App;
