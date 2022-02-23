import React, { Component } from "react";

import Aid from "../Aid/Aid";
import { CategoryTab, TabItem } from "../CategoryTab/CategoryTab";
import Expenditure from "../Expenditure/Expenditure";
import InKind from "../InKind/InKind";
import Vaccines from "../Vaccines/Vaccines";

import "./Visualization.scss";

export interface VisualizationProps {
  loading: boolean;
  cashDonations: any[];
  inKindDonations: any[]
}
export interface State {
  activeTab: string;
  tabList: TabItem[];
}



const Visualization = (props: VisualizationProps) => {
  const { loading, cashDonations, inKindDonations } = props;
  const [activeTab, setActiveTab] = React.useState('aid')
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
    {
      name: "Vaccines"
    },
    // {
    //   name: "Accountability"
    // }
  ];

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName.toLocaleLowerCase())
  };

  const renderChart = (activeTab: string) => {
    switch (activeTab.toLocaleLowerCase()) {
      case "aid":
        return <Aid 
          loading={loading}
          covidAid={cashDonations} 
        />;

      case "in kind":
        return <InKind donations={inKindDonations}/>;

      case "expenditure":
        return <Expenditure />;

      case "vaccines":
        return <Vaccines />
        
      default:
        return <Aid
        loading={loading}
        covidAid={cashDonations} 
        />;
    }
  };

  return (
    <div className="mt-4">
      <CategoryTab
        tabList={tabList}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
      <div className="tabs-content visualization__tab-content mt-3">
        {renderChart(activeTab)}
      </div>
    </div>
  );
}

export default Visualization;