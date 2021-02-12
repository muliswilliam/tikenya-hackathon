import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { formatAmount } from "../../services/Utils";
import { ExpenditurePieChart } from "./ExpenditurePieChart";
const tickStyles = {
  fill: "#073b4c",
  fontSize: 16,
  fontWeight: 600,
  fontFamily: "Roboto",
};

interface PieChartItem {
  name: string;
  value: number;
}

interface ExpenditureCountiesProps {
  menuItemName: string;
  pieChartData: PieChartItem[];
  nationalGovtFunding: number;
  countyGovtReceipt: number;
}

interface State {}

export class ExpenditureCounties extends Component<
  ExpenditureCountiesProps,
  State
> {
  renderCustomizedLabel = (props: any) => {
    const { pieChartData } = this.props;

    const { cx, cy, midAngle, innerRadius, outerRadius, index } = props;
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={tickStyles}
      >
        <tspan style={tickStyles}>
          {formatAmount(pieChartData[index].value)}
        </tspan>
        <tspan x={x} y={y + tickStyles.fontSize + 5} style={tickStyles}>
          {pieChartData[index].name}
        </tspan>
      </text>
    );
  };

  ticks = (stackData: any) => {
    return [
      0,
      stackData.allocatied,
      stackData.allocated + stackData.unallocated,
    ].map((number) => formatAmount(number));
  };

  render() {
    const {
      pieChartData,
      menuItemName,
      nationalGovtFunding,
      countyGovtReceipt,
    } = this.props;

    const stackData = {
      unallocated: nationalGovtFunding - countyGovtReceipt,
      allocated: countyGovtReceipt,
    };

    const data = [stackData];

    return (
      <>
        <div className="pt-6 pl-6 pr-6 is-flex is-flex is-justify-content-space-between">
          <div>
            <p className="visualization__title">
              Expending Body: County Governments
            </p>
            <p className="visualization__sub-title">
              Source of funds: National Government
            </p>
          </div>
          <div>
            <h4 className="visualization__disbursed">
              {formatAmount(data[0].allocated)} Disbursed
            </h4>
          </div>
        </div>

        <div style={{ paddingLeft: 38, paddingTop: 20 }}>
          <p
            className=""
            style={{
              paddingLeft: 10,
              color: "#0a3b4c",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            {formatAmount(data[0].allocated)} out of{" "}
            {formatAmount(data[0].allocated + data[0].unallocated)} Disbursed to
            County Governments
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart
              layout="vertical"
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                style={{ transform: "translate(0, -40%)" }}
                orientation="bottom"
                type="number"
                axisLine={false}
                tick={tickStyles}
                ticks={[
                  0,
                  data[0].allocated,
                  data[0].allocated + data[0].unallocated,
                ]}
                domain={[
                  0,
                  formatAmount(data[0].allocated + data[0].unallocated),
                ]}
                tickFormatter={(item) => (item > 0 ? formatAmount(item) : 0)}
              />
              <YAxis type="category" hide />
              <Bar dataKey="allocated" stackId="a" fill="#34EDD2" />
              <Bar dataKey="unallocated" stackId="a" fill="#089B74" />
            </BarChart>
          </ResponsiveContainer>
          <ExpenditurePieChart
            pieChartData={pieChartData}
            menuItemName={menuItemName}
            showTotal={false}
          />
        </div>
      </>
    );
  }
}
