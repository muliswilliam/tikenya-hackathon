import React, { Component } from "react";
import { ExpenditurePieChart } from "./ExpenditurePieChart";

interface PieChartItem {
  name: string;
  value: number;
}

interface ExpenditureNationalProps {
  menuItemName: string;
  pieChartData: PieChartItem[];
}

export class ExpenditureNational extends Component<ExpenditureNationalProps> {
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
