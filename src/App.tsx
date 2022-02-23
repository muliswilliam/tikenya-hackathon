import React from 'react';

// Hooks
import useSWR from 'swr';

// Components
import Header from './components/Header/Header';
import Visualization from './components/Visualization/Visualization';
import Loader from './components/shared/Loader';

// Utils
import { calculateTotalAid, formatNumber } from './services/Utils';

// CSS Imports
import 'bulma';
import './App.scss';

const aidUrl = 'https://actionfortransparency.org/wp-json/wp/v2/covid19_aid'
const diseaseUrl = "https://disease.sh/v3/covid-19/countries/kenya";
const aidFetcher = () => fetch(aidUrl).then(res => res.json())
const casesFetcher = () => fetch(diseaseUrl).then(res => res.json())

const App = () => {
  const { data: covidAid, error: covidAidError } = useSWR('/covid/aid', aidFetcher)
  const { data: casesData, error: casesError } = useSWR('/cases/kenya', casesFetcher);
  
  if(casesError || covidAidError) return <div>Failed to load</div>
  const isLoadingHeaderData = !casesData && !casesError;
  const isLoadingAidData = !covidAid && !covidAidError

  if(isLoadingAidData || isLoadingHeaderData) {
    return (
      <div className='loader-container'>
        <Loader width={100} height={100} />
      </div>
    )
  }
  const { cases, deaths, recovered } = casesData
  const totalAid = calculateTotalAid(covidAid)

  const inKindDonations = covidAid
    .filter((donation:any) => donation.donation_type.includes('IN KIND'))
  const cashDonations = covidAid
    .filter((donation: any) => donation.donation_type.includes('CASH'))
  
  return (
      <>
        <Header
          loading={isLoadingHeaderData}
          totalAid={formatNumber(totalAid)}
          totalCases={cases}
          totalDeaths={deaths}
          totalRecovered={recovered}
        />
        <Visualization
          loading={isLoadingAidData}
          cashDonations={cashDonations}
          inKindDonations={inKindDonations}
        />
      </>
  );
}

export default App;
