import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import { MenuItem, SideMenu } from "../Sidemenu/SideMenu";

import {
  categorizeFundingData,
  filterByMenuId,
  formatAmount,
} from "../../services/Utils";

import "./Aid.scss";

interface FundItem {
  name: string;
  amount: number;
  formattedAmount: string;
}

export interface AidProps {}

export interface State {
  menuItems: MenuItem[];
  activeMenuItemId: number;
  fundingData: object[];
  barChartData: FundItem[];
}

const axisLineStyles = {
  fill: "#073b4c",
  width: 1,
  opacity: 0.5,
};

const tickStyles = {
  fill: "#073b4c",
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "Roboto",
};

const RotatedTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0 - 10}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
        style={tickStyles}
      >
        {payload.value}
      </text>
    </g>
  );
};

export class Aid extends Component<AidProps, State> {
  constructor(props: AidProps) {
    super(props);

    const menuItems: MenuItem[] = [
      {
        id: 0,
        name: "Non Govt Organization (NGO)",
      },
      {
        id: 1,
        name: "Private Sector",
      },
      {
        id: 2,
        name: "International Organizations",
      },
    ];

    this.state = {
      menuItems: menuItems,
      activeMenuItemId: 0,
      fundingData: [],
      barChartData: [],
    };
  }

  changeActiveMenuItem = (menuItemId: number) => {
    const { fundingData } = this.state;

    this.setState({
      activeMenuItemId: menuItemId,
      barChartData: filterByMenuId(fundingData, menuItemId),
    });
  };

  componentDidMount() {
    const { activeMenuItemId } = this.state;

    // Consume new data
    fetch("http://actionfortransparency.org/wp-json/wp/v2/covid19_aid")
      .then((response) => response.json())
      .then((data) => {
        var categorized = categorizeFundingData(data);
        // console.log(categorized);
        this.setState({
          fundingData: categorized,
          barChartData: filterByMenuId(categorized, activeMenuItemId),
        });
      });
  }

  render() {
    const { menuItems, activeMenuItemId, barChartData } = this.state;
    const sector = menuItems[activeMenuItemId].name;
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <SideMenu
            menuItems={menuItems}
            activeMenuItem={activeMenuItemId}
            changeActiveMenuItem={this.changeActiveMenuItem}
          ></SideMenu>
        </div>
        <div className="column is-three-quarters mt-6">
          <p className="visualization__title ml-6 pb-4">{sector}</p>
          <div className="visualization__chart-area">
            {this.renderBarGraph(barChartData)}
          </div>
        </div>
      </div>
    );
  }

  renderBarGraph(barChartData: FundItem[]) {
    return (
      <BarChart
        width={1000}
        height={450}
        data={barChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 100,
        }}
        barSize={30}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={axisLineStyles}
          tick={<RotatedTick />}
          padding={{ left: 0 }}
          interval={0}
        />
        <YAxis
          tickFormatter={(tickItem) => formatAmount(tickItem)}
          padding={{ top: 50 }}
          axisLine={axisLineStyles}
          tick={tickStyles}
        />
        <Tooltip
          formatter={(value: any, name: any, props: any) => {
            return formatAmount(value);
          }}
          cursor={{ fill: "transparent" }}
        />
        <Bar dataKey="amount" fill="#118ab2">
          <LabelList dataKey="formattedAmount" position="top" fill="#118ab2" />
        </Bar>
      </BarChart>
    );
  }
}
