import React, { Component } from "react";

import { Aid } from "../Aid/Aid";
import { CategoryTab, TabItem } from "../CategoryTab";
import { Expenditure } from "../../Expenditure/Expenditure";

import "./Visualization.scss";

export interface VisualizationProps {}
export interface State {
  activeTab: string;
  tabList: TabItem[];
}

export class Visualization extends Component<VisualizationProps, State> {
  constructor(props: VisualizationProps) {
    super(props);

    const tabList: TabItem[] = [
      {
        name: "Aid",
        content: "Content 1",
      },
      {
        name: "Expenditure",
        content: "Content 2",
      },
      {
        name: "Timeline",
        content: "Content 3",
      },
    ];

    this.state = {
      activeTab: "Aid",
      tabList: tabList,
    };
  }

  changeActiveTab = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  renderChart = (activeTab: string) => {
    switch (activeTab.toLocaleLowerCase()) {
      case "aid":
        return <Aid />;
        break;

      default:
        return <Expenditure />;
        break;
    }
  };

  render() {
    const { tabList, activeTab } = this.state;

    return (
      <div className="mt-4">
        <CategoryTab
          tabList={tabList}
          activeTab={activeTab}
          changeActiveTab={this.changeActiveTab}
        />
        <div className="tabs-content visualization__tab-content mt-3" key={activeTab}>
          {this.renderChart(activeTab)}
        </div>
      </div>
    );
  }
}
