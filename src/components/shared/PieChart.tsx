import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PieChartItem } from '../Expenditure/ExpenditurePieChart';
import { colors } from '../../services/Utils'

interface PieChartProps {
  data: PieChartItem[]
}

const PieChart = (props: PieChartProps) => {
  const { data: pieChartData } = props;
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      type: 'pie',
      backgroundColor: 'transparent'
    },
    credits: {
      enabled: false
    },
    colors,
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        borderColor: 'transparent',
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      { type: 'pie'},
      { data: [
        ...pieChartData
      ],
      type: 'pie'
    }
    ]
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      key={Math.random()}
    />
  )
}

export default PieChart;