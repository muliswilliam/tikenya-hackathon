import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "../shared/Tab";
import "./CategoryTab.scss";

export interface TabItem {
  name: string;
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
    const { activeTab, changeActiveTab } = this.props;

    return (
      <div className="category-tab">
        <div className="tabs is-small is-centered">
          <ul>
            {this.props.tabList.map((tab: TabItem) => (
              <Tab
                tab={tab}
                key={tab.name}
                activeTab={activeTab}
                changeActiveTab={changeActiveTab}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
