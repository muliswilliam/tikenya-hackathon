import React, { Component } from "react";
import { CategoryTab, TabItem } from "./CategoryTab/CategoryTab";
import SideMenu, { MenuItem } from "./Sidemenu/SideMenu";

export interface VisualizationProps {}
export interface State {
  activeTab: string;
  tabList: TabItem[];
  menuItems: MenuItem[];
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
        name: "Donations",
        content: "Content 2",
      },
      {
        name: "Timeline",
        content: "Content 3",
      },
    ];

    const menuItems: MenuItem[] = [
      {
        id: 1,
        name: "Banking Industry",
      },
      {
        id: 2,
        name: "Governments",
      },
      {
        id: 3,
        name: "Parastatals",
      },
      {
        id: 4,
        name: "Betting Firms",
      },
    ];

    this.state = {
      activeTab: "Aid",
      tabList: tabList,
      menuItems: menuItems,
    };
  }

  changeActiveTab = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  activeTabContent = () => {
    const { tabList } = this.state;
    const activeIndex = tabList.findIndex((tab) => {
      return tab.name === this.state.activeTab;
    });

    if (activeIndex !== -1) return tabList[activeIndex].content;
    return 0;
  };

  render() {
    const { tabList, activeTab, menuItems } = this.state;

    return (
      <div className="mt-6">
        <CategoryTab
          tabList={tabList}
          activeTab={activeTab}
          changeActiveTab={this.changeActiveTab}
        />
        <div className="columns">
          <div className="column is-one-quarter">
            <SideMenu menuItems={menuItems} activeMenuItem={1}></SideMenu>
          </div>
          <div className="column is-three-quarters">
            <div className="tabs-content" key={activeTab}>
              {this.activeTabContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
