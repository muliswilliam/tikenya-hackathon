import React from 'react';
import Highcharts, { DataOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { formatAmount } from "../../services/Utils";

const tickStyles = {
  fill: "#073b4c",
  fontSize: 18,
  fontWeight: 500,
  fontFamily: "Roboto",
};

const COLORS = ["#18D8A6", "#1185B2", "#FACE61", "#093B4C"];

export interface PieChartItem {
  name: string;
  y: number;
  sliced: boolean;
  selected: boolean;
}

interface ExpenditurePieChartProps {
  menuItemName: string;
  pieChartData: PieChartItem[];
  showTotal: boolean;
}
const calculateTotal = (pieChartData: PieChartItem[]) => {
  return pieChartData.map((item) => item.y).reduce((a, b) => a + b, 0);
};

const ExpenditurePieChart = (props: ExpenditurePieChartProps) => {
  const { pieChartData, menuItemName, showTotal } = props;
  const totalDisbursed = calculateTotal(pieChartData);
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      type: 'pie',
      backgroundColor: 'transparent'
    },
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
    <div>
      <div className="is-flex is-flex is-justify-content-space-between">
        {showTotal && (
          <div>
            <p className="visualization__title">
              Source of Funds: {menuItemName}
            </p>
          </div>
        )}
        {!showTotal && (
          <p className="visualization__title">Expending By Counties</p>
        )}
        {showTotal && (
          <div>
            <h4 className="visualization__disbursed">
              {formatAmount(totalDisbursed)} Disbursed
            </h4>
          </div>
        )}
      </div>
      <figure className="highcharts-figure">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
        />
      </figure>
    </div>
  );
};

export default ExpenditurePieChart;