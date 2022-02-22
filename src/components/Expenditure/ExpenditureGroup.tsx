import React, { Component } from "react";
import ExpenditurePieChart, { PieChartItem } from "./ExpenditurePieChart";

interface ExpenditureGroupProps {
  menuItemName: string;
  pieChartData: PieChartItem[];
}

export class ExpenditureGroup extends Component<ExpenditureGroupProps> {
  render() {
    const { pieChartData, menuItemName } = this.props;

    return (
      <div className="pt-6 pl-6 pr-6">
        <ExpenditurePieChart
          pieChartData={pieChartData}
          menuItemName={menuItemName}
          showTotal={true}
        />
      </div>
    );
  }
}
