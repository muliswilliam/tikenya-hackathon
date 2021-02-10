import React, { Component } from "react";

import 'bulma';
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="columns">
          <div className="column is-1 ml-6">
            <img src={"./A4T-logo.png"} className="header__logo" />
          </div>
          <div className="column is-11 has-text-centered is-flex is-align-items-center">
            <h1 className="header__title is-uppercase">Covid-19 Aid Tracker</h1>
          </div>
        </div>

        <div className="columns is-flex is-align-items-center">
          <div className="column is-5">
            <div className="is-flex is-align-items-center is-justify-content-space-between ml-6">
              <h3 className="header__total-aid is-uppercase">Total Aid</h3>
              <h4 className="header__total-aid-value">194, 663, 072, 350 </h4>
            </div>
          </div>
          <div className="header__vertical-line"></div>
          <div className="column is-7">
            <div className="columns">
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">Confirmed Cases</h6>
                <h5 className="header__cases-value">88,380</h5>
              </div>
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">Confirmed Deaths</h6>
                <h5 className="header__cases-value">1,526</h5>
              </div>
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">
                  Confirmed Recoveries
                </h6>
                <h5 className="header__cases-value header__cases-value--success ">
                  68,829
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
