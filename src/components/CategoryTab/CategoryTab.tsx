import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CategoryTab.scss";

export interface TabItem {
  name: string;
  content: string;
}

export interface CategoryTabProps {
  tabList: TabItem[];
  activeTab: string;
  changeActiveTab: Function;
}

interface State {}

export class CategoryTab extends Component<CategoryTabProps, State> {
  static propTypes = {
    tabList: PropTypes.array.isRequired,
    activeTab: PropTypes.string,
    changeActiveTab: PropTypes.func,
  };

  render() {
    return (
      <div className="category-tab">
        <div className="tabs is-centered">
          <ul>
            {this.props.tabList.map((tab: TabItem) => (
              <Tab
                tab={tab}
                key={tab.name}
                activeTab={this.props.activeTab}
                changeActiveTab={this.props.changeActiveTab}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const Tab = (props: any) => {
  const { name } = props.tab;
  const { activeTab, changeActiveTab } = props;

  return (
    <li
      className={name === activeTab ? "is-active" : ""}
      onClick={() => changeActiveTab(name)}
    >
      <a>{name}</a>
    </li>
  );
};
