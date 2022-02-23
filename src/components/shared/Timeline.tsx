import React from 'react';
import Highcharts from 'highcharts';
import timeline from 'highcharts/modules/timeline';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../../services/Utils';

timeline(Highcharts);

interface TimelineProps {
  data: any[];
  vaccineName: string;
  totalDoses: string;
}

const Timeline = (props: TimelineProps) => {
  const { data, vaccineName, totalDoses } = props;
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const links = data.map(item => item.link)
  const options: Highcharts.Options = {
    chart: {
      type: 'timeline',
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      timeline: {
        events: {
          click: (event: any) => {
            console.log(event);
          },
        },
      },
    },
    colors,
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    title: {
      text: `Timeline of ${vaccineName} Donations`,
    },
    subtitle: {
      text: `Total Doses: ${totalDoses}`,
    },
    series: [
      {
        type: 'timeline',
        dataLabels: {
          connectorColor: 'silver',
          connectorWidth: 2,
          allowOverlap: false,
          useHTML: true,
          formatter: function() {
            let format;
            if (!this.series.chart.styledMode) {
              format = '<span style="color:' + this.point.color + '">● </span>';
            } else {
              format = '<span>● </span>';
            }
            format +=
              '<span>' +
              (this.key || '') +
              '</span><br/>' +
              '<a target="_blank" href="' + links[this.point.index] + '">More details here<a/>';
            return format;
          },
        },
        data: [...data],
        custom: {
          links
        }
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      key={Math.random()}
    />
  );
};

export default Timeline;
