import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from '../Tab'
import "./InKindTab.scss";

export interface TabItem {
  name: string;
}

export interface InKindTabProps {
  tabList: TabItem[];
  activeTab: string;
  changeActiveTab: Function;
}

interface State {}

export class InKindTab extends Component<InKindTabProps, State> {
  static propTypes = {
    tabList: PropTypes.array.isRequired,
    activeTab: PropTypes.string,
    changeActiveTab: PropTypes.func,
  };

  render() {
    return (
      <div className="inkind-tab">
        <div className="tabs">
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
