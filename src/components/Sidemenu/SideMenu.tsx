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
}

export class SideMenu extends Component<MenuProps, State> {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    activeMenuItem: PropTypes.number,
  };

  static defaultProps = {
    menuItems: [],
    activeIndex: null,
  };

  constructor(props: MenuProps) {
    super(props);
  }

  render() {
    const { menuItems, activeMenuItem } = this.props;

    return (
      <div className="sidemenu">
        <aside className="menu">
          <ul className="menu-list">
            {menuItems.map((menuItem: MenuItem) => (
              <li key={menuItem.id}>
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

export default SideMenu;
