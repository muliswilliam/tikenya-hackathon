import React, { Component } from "react";
import "bulma";

import Header from "./components/Header/Header";
import { Visualization } from "./components/Visualization/Visualization";
import { calculateTotalAid, formatNumber } from "./services/Utils";

import "./App.scss";

interface AppProps {}

interface State {
  totalAid: number;
}

class App extends Component<AppProps, State> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      totalAid: 0,
    };
  }
  componentDidMount() {
    fetch("funding.json")
      .then((response) => response.json())
      .then((data) => {
        const totalAid = calculateTotalAid(data);
        this.setState({
          totalAid: totalAid,
        });
      });
  }
  render() {
    const { totalAid } = this.state;

    return (
      <div>
        <div className="App">
          <Header totalAid={formatNumber(totalAid)}></Header>
          <Visualization></Visualization>
        </div>
      </div>
    );
  }
}

export default App;
