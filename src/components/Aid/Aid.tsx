import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from 'recharts';
import { MenuItem, SideMenu } from '../Sidemenu/SideMenu';

import {
  categorizeFundingData,
  filterByMenuId,
  formatAmount,
} from '../../services/Utils';

import './Aid.scss';

interface FundItem {
  name: string;
  amount: number;
  formattedAmount: string;
}

export interface AidProps {
  covidAid: any[];
  loading: boolean;
}

const axisLineStyles = {
  fill: '#073b4c',
  width: 1,
  opacity: 0.5,
};

const tickStyles = {
  fill: '#073b4c',
  fontSize: 13,
  fontWeight: 500,
  fontFamily: 'Roboto',
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

const Aid = (props: AidProps) => {
  const { covidAid, loading } = props;
  const [activeMenuItemId, setActiveMenuId] = React.useState(0);
  const menuItems: MenuItem[] = [
    {
      id: 0,
      name: 'Non Govt Organizations (NGOs)',
    },
    {
      id: 1,
      name: 'Private Sector',
    },
    {
      id: 2,
      name: 'Governments',
    },
  ];

  const fundingData = React.useMemo(() => {
    return categorizeFundingData(covidAid);
  }, [covidAid]);

  const barChartData = React.useMemo(() => {
    return filterByMenuId(fundingData, activeMenuItemId);
  }, [activeMenuItemId, fundingData])

  const sector = React.useMemo(() => {
    return menuItems[activeMenuItemId].name;
  }, [activeMenuItemId]);

  const changeActiveMenuItem = (menuItemId: number) => {
    setActiveMenuId(menuItemId);
  };

  if (loading) {
    return <button className="button is-loading">Loading</button>;
  }

  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <SideMenu
          menuItems={menuItems}
          activeMenuItem={activeMenuItemId}
          changeActiveMenuItem={changeActiveMenuItem}
        ></SideMenu>
      </div>
      <div className="column is-three-quarters mt-6">
        <p className="visualization__title ml-6 pb-4">{sector}</p>
        <div className="visualization__chart-area">
          {renderBarGraph(barChartData)}
        </div>
      </div>
    </div>
  );
};

const renderBarGraph = (barChartData: FundItem[]) => {
  const amounts = barChartData.map(item => item.amount);
  const max = Math.max(...amounts)
  const min = Math.min(...amounts)

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
        type="number"
        tickFormatter={(tickItem) => formatAmount(tickItem)}
        padding={{ top: 50 }}
        axisLine={axisLineStyles}
        tick={tickStyles}
        domain={[min - 1000, max]}
      />
      <Tooltip
        formatter={(value: any, name: any, props: any) => {
          return formatAmount(value);
        }}
        cursor={{ fill: 'transparent' }}
      />

      <Bar dataKey="amount" fill="#118ab2">
        <LabelList dataKey="formattedAmount" position="top" fill="#118ab2" />
      </Bar>
    </BarChart>
  );
};

export default Aid;
