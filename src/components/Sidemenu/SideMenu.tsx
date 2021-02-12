import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SideMenu.scss";

export interface MenuItem {
  id: number;
  name: string;
}

export interface MenuProps {
  menuItems: MenuItem[];
  activeMenuItem: number;
  changeActiveMenuItem: Function;
}

export interface State {}

export class SideMenu extends Component<MenuProps, State> {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    activeMenuItem: PropTypes.number,
    changeActiveMenuItem: PropTypes.func,
  };

  static defaultProps = {
    menuItems: [],
    activeIndex: null,
  };

  render() {
    const { menuItems, activeMenuItem, changeActiveMenuItem } = this.props;

    return (
      <div className="sidemenu">
        <aside className="menu">
          <ul className="menu-list">
            {menuItems.map((menuItem: MenuItem) => (
              <li
                key={menuItem.id}
                onClick={() => changeActiveMenuItem(menuItem.id)}
              >
                <a
                  className={menuItem.id === activeMenuItem ? "is-active" : ""}
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}
