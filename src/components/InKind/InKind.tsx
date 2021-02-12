import React, { Component } from "react";

import { MenuItem, SideMenu } from "../Sidemenu/SideMenu";
import { InKindTab, TabItem } from "../InKindTab/InKindTab";
import "./InKind.scss";

interface InKindProps {}

interface State {
  activeMenuItemId: number;
  menuItems: MenuItem[];
  activeTab: string;
}

const tabs: TabItem[] = [
  {
    name: "Germany",
  },
  {
    name: "China",
  },
  {
    name: "USA",
  },
  {
    name: "Kenya",
  },
];

const menuItems: MenuItem[] = [
  {
    id: 0,
    name: "Governments",
  },
  {
    id: 1,
    name: "Private Sector",
  },
  {
    id: 2,
    name: "Business Persons",
  },
];

class InKind extends Component<InKindProps, State> {
  constructor(props: InKindProps) {
    super(props);

    this.state = {
      activeMenuItemId: 0,
      menuItems: menuItems,
      activeTab: "china",
    };
  }

  changeActiveMenuItem = (menuItemId: number) => {
    this.setState({
      activeMenuItemId: menuItemId,
    });
  };

  changeActiveTab = (tabName: string) => {
    this.setState({ activeTab: tabName.toLocaleLowerCase() });
  };

  render() {
    const { menuItems, activeMenuItemId, activeTab } = this.state;
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
            <div className="ml-6">
              <InKindTab
                tabList={tabs}
                changeActiveTab={this.changeActiveTab}
                activeTab={activeTab}
              />
              <div className="mt-5">
                <p className="visualization__title">Medical Supplies</p>
                <p className="visualization__sub-title">
                  Health Cabinet Secretary Mutahi Kagwe has received a
                  consignment of medical supplies from China
                </p>
              </div>
              <div className="columns mt-6">
                <div className="column">
                  <div className="is-flex is-flex-direction-column is-justify-content-start">
                    <img
                      className="in-kind__item-img"
                      src={"./masks.svg"}
                      alt=""
                    />
                    <p className="in-kind__item-title">
                      <span>200,000</span>
                      <span>Masks</span>
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="is-flex is-flex-direction-column is-justify-content-start">
                    <img
                      className="in-kind__item-img"
                      src={"./testing_Kits.svg"}
                      alt=""
                    />
                    <p className="in-kind__item-title">
                      <span>500,000</span>
                      <span>Testing tubes</span>
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="is-flex is-flex-direction-column is-justify-content-start">
                    <img
                      className="in-kind__item-img"
                      src={"./shoe_covers.svg"}
                      alt=""
                    />
                    <p className="in-kind__item-title">
                      <span>40,000</span>
                      <span>Shoe Covers</span>
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="is-flex is-flex-direction-column is-justify-content-start">
                    <img
                      className="in-kind__item-img"
                      src={"./masks_n95.svg"}
                      alt=""
                    />
                    <p className="in-kind__item-title">
                      <span>76,000</span>
                      <span>N95 Masks</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InKind;
