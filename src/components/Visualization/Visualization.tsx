import React, { Component } from "react";

import { Aid } from "../Aid/Aid";
import { CategoryTab, TabItem } from "../CategoryTab/CategoryTab";
import { Expenditure } from "../Expenditure/Expenditure";
import InKind from "../InKind/InKind";

import "./Visualization.scss";

export interface VisualizationProps {}
export interface State {
  activeTab: string;
  tabList: TabItem[];
}

const tabList: TabItem[] = [
  {
    name: "Aid",
  },
  {
    name: "Expenditure",
  },
  {
    name: "In Kind",
  },
];

export class Visualization extends Component<VisualizationProps, State> {
  constructor(props: VisualizationProps) {
    super(props);

    this.state = {
      activeTab: "aid",
      tabList: tabList,
    };
  }

  changeActiveTab = (tabName: string) => {
    this.setState({ activeTab: tabName.toLocaleLowerCase() });
  };

  renderChart = (activeTab: string) => {
    switch (activeTab.toLocaleLowerCase()) {
      case "aid":
        return <Aid />;
        break;

      case "in kind":
        return <InKind />;
        break;

      case "expenditure":
        return <Expenditure />;
        break;

      default:
        return <Aid />;
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
        <div className="tabs-content visualization__tab-content mt-3">
          {this.renderChart(activeTab)}
        </div>
      </div>
    );
  }
}
