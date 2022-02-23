import useSWR from "swr";
import "bulma";
import "./Header.scss";

interface HeaderProps {
  loading: boolean;
  totalAid: string;
  totalCases: number;
  totalDeaths: number;
  totalRecovered: number
}

const Header =  (props: HeaderProps) => {
  const { loading, totalAid, totalCases, totalDeaths, totalRecovered } = props;

  return (
    <div className="header pt-2">
      <div className="columns">
        <div className="column is-12 has-text-centered is-flex is-align-items-center">
          <h1 className="header__title is-uppercase">Covid-19 Aid Tracker</h1>
        </div>
      </div>
      {!loading &&
        <div className="columns is-flex is-align-items-center">
          <div className="column is-5">
            <div className="is-flex is-align-items-center is-justify-content-center ml-6">
              <h3 className="header__total-aid is-uppercase mr-4">Total Aid</h3>
              <h4 className="header__total-aid-value">{totalAid} </h4>
            </div>
          </div>
          <div className="header__vertical-line"></div>
          <div className="column is-7">
            <div className="columns">
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">Confirmed Cases</h6>
                <h5 className="header__cases-value">{totalCases}</h5>
              </div>
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">Confirmed Deaths</h6>
                <h5 className="header__cases-value">{totalDeaths}</h5>
              </div>
              <div className="column is-flex is-align-items-center">
                <h6 className="header__cases is-uppercase">
                  Confirmed Recoveries
                </h6>
                <h5 className="header__cases-value header__cases-value--success ">
                  {totalRecovered}
                </h5>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Header;
