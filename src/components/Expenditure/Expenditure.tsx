import React, { Component } from 'react';

import { MenuItem, SideMenu } from '../Sidemenu/SideMenu';
import { ExpenditureNational } from './ExpenditureNational';
import { ExpenditureCounties } from './ExpenditureCounties';
import {
  getExpenditureSummary,
  getExpenditureByBody,
  getNationalGovernmentFunding,
} from '../../services/Utils';

import './Expenditure.scss';

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

export class Expenditure extends Component<ExpenditureProps, State> {
  constructor(props: ExpenditureProps) {
    super(props);

    this.state = {
      loading: true,
      menuItems: [],
      activeMenuItemId: 0,
      expenditureData: [],
      summary: {},
      nationalGovtFunding: 0,
      countyGovtReceipt: 0,
    };
  }

  componentDidMount() {
    fetch('https://actionfortransparency.org/wp-json/wp/v2/covid19_expenditure')
      .then((response) => response.json())
      .then((data) => {
        const summary = getExpenditureSummary(data);
        this.setState({
          loading: false,
          expenditureData: data,
          summary: summary,
          menuItems: this.createMenuItems(summary.expendingBodies),
        });
      });

    fetch('https://actionfortransparency.org/wp-json/wp/v2/covid19_aid')
      .then((response) => response.json())
      .then((data) => {
        const nationalGovtFunding = getNationalGovernmentFunding(data);
        const countyGovtReceipt = 0.3 * nationalGovtFunding;

        this.setState({ nationalGovtFunding, countyGovtReceipt });
      });
  }

  createMenuItems = (expendingBodies: string[]) => {
    return expendingBodies.map((body, index) => {
      return {
        id: index,
        name: body,
      };
    });
  };

  filterByExpendingBody = (body: string) => {
    const { expenditureData } = this.state;

    return getExpenditureByBody(expenditureData, body);
  };

  changeActiveMenuItem = (menuItemId: number) => {
    this.setState({ activeMenuItemId: menuItemId });
  };

  renderActiveContent(activeMenuItemId: number, body: string) {
    const { expenditureData, countyGovtReceipt, nationalGovtFunding } =
      this.state;
    const filteredData = getExpenditureByBody(expenditureData, body);
    const summary = getExpenditureSummary(filteredData);

    // if (body === "National Government") {
    //   return (
    //     <ExpenditureNational
    //       menuItemName={body}
    //       pieChartData={summary.totals}
    //     />
    //   );
    // }

    if (body === 'County Governments') {
      return (
        <ExpenditureCounties
          menuItemName={body}
          pieChartData={summary.totals}
          nationalGovtFunding={nationalGovtFunding}
          countyGovtReceipt={countyGovtReceipt}
        />
      );
    } else {
      return (
        <ExpenditureNational
          menuItemName={body}
          pieChartData={summary.totals}
        />
      );
    }
  }

  render() {
    const { loading, menuItems, activeMenuItemId } = this.state;
    if (loading) {
      return <button className="button is-loading">Loading</button>;
    }

    const menuItemName = menuItems[activeMenuItemId].name;

    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <SideMenu
            menuItems={menuItems}
            activeMenuItem={activeMenuItemId}
            changeActiveMenuItem={this.changeActiveMenuItem}
          ></SideMenu>
        </div>
        <div className="column is-three-quarters">
          <div className="visualization__chart-area">
            {this.renderActiveContent(activeMenuItemId, menuItemName)}
          </div>
        </div>
      </div>
    );
  }
}
