import React from "react";
import useSWR from "swr";
import { formatNumber } from "../../services/Utils";
import Loader from "../shared/Loader";
import Timeline from "../shared/Timeline";
import { MenuItem, SideMenu } from "../Sidemenu/SideMenu";

const fetcher = () => fetch('https://actionfortransparency.org/wp-json/wp/v2/covid_vaccine').then(res => res.json())

const Vaccines = () => {
  const [activeMenuItemId, setActiveMenuItemId] = React.useState(0)
  const [timelineData, setTimelineData ] = React.useState([])
  const [totalDoses, setTotalDoses] = React.useState(0)
  const { data: vaccinesData, error } = useSWR('/covid/vaccines', fetcher)
  const isLoading = !vaccinesData && !error

  React.useEffect(() => {
    if(vaccinesData === undefined) return
    const filteredVaccines = vaccinesData
      .filter((vaccine: any) => vaccine.vaccine_type.includes(vaccineName))
    let totalDoses = 0;
    const timelineData = filteredVaccines
      .map((vaccine: any) => {
        const { total_doses, title, acquisition_date, link} = vaccine
        totalDoses += parseInt(vaccine.total_doses)
        return {
          name: `${vaccine.title.rendered} <br/> ${formatNumber(total_doses)} doses donated on ${acquisition_date}`,
          label: `${formatNumber(total_doses)} doses of ${vaccineName}`,
          x: new Date(vaccine.acquisition_date).getTime(),
          link: vaccine.link
        }
      })

    setTimelineData(timelineData)
    setTotalDoses(totalDoses)
  }, [activeMenuItemId, vaccinesData])

  if(isLoading) {
    return (
      <div className="loader-container">
        <Loader width={100} height={100} />
      </div>
    )
  }
  
  let menuItems: MenuItem[] =[];
  if(vaccinesData !== undefined) {
    menuItems = vaccinesData
      .map((vaccine: any) => vaccine.vaccine_type[0])
      .filter((value: any, index: number, self: any[]) => self.indexOf(value) === index)
      .map((item: string, index: number) => ({ id: index, name: item}));
  }
  
  let vaccineName = '';
  if(menuItems.length > 0) {
    vaccineName = menuItems[activeMenuItemId].name;
  }

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
          <Timeline
            data={timelineData}
            vaccineName={vaccineName}
            totalDoses={formatNumber(totalDoses)}
          />
        </div>
      </div>
    </div>
  )
}

export default Vaccines;