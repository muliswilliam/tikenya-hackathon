import React, { Component } from 'react';

import { MenuItem, SideMenu } from '../Sidemenu/SideMenu';
import { ExpenditureGroup } from './ExpenditureGroup';
import { getExpenditureSummary } from '../../services/Utils';

import './Expenditure.scss';
import useSWR from 'swr';
import Loader from '../shared/Loader';
import ExpenditurePieChart, { PieChartItem } from './ExpenditurePieChart';

export interface ExpenditureProps {}

export interface State {
  loading: boolean;
  menuItems: MenuItem[];
  activeMenuItemId: number;
  expenditureData: object[];
  summary: object;
  nationalGovtFunding: number;
  countyGovtReceipt: number;
}

const fetcher = () =>
  fetch(
    'https://actionfortransparency.org/wp-json/wp/v2/covid19_expenditure'
  ).then((res) => res.json());

const Expenditure = (props: ExpenditureProps) => {
  const [activeMenuItemId, setActiveMenuItemId] = React.useState(0);
  const [pieChartData, setPieChartData] = React.useState<PieChartItem[]>([])
  const { data: expenditureData, error } = useSWR(
    '/covid/expenditure',
    fetcher
  );
  const isLoading = !expenditureData && !error
  
  React.useEffect(() => {
    if(expenditureData === undefined) return;
    const filteredExp = expenditureData.filter((item: any) => item.source_of_fund === menuItemName)
    const pieChartData: PieChartItem[] = filteredExp.map((item: any, index: number) => {
      return {
        name: item.expending_body,
        y: parseInt(item.amount_expended),
        selected: index === 0,
        sliced: index === 0
      }
    })
    setPieChartData(pieChartData)
  }, [activeMenuItemId, expenditureData])
  
  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader width={100} height={100} />
      </div>
    );
  }

  const { fundSources } = getExpenditureSummary(expenditureData)
  const menuItems = fundSources
    .map((item: any, index: number) => ({
      id: index,
      name: item,
    }));

  const menuItemName = menuItems[activeMenuItemId].name
  
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <SideMenu
          menuItems={menuItems}
          activeMenuItem={activeMenuItemId}
          changeActiveMenuItem={(menuItemId) => setActiveMenuItemId(menuItemId)}
        ></SideMenu>
      </div>
      <div className="column is-three-quarters">
        <div className="visualization__chart-area">
          <ExpenditurePieChart
            menuItemName={menuItemName}
            pieChartData={pieChartData}
            showTotal={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Expenditure;