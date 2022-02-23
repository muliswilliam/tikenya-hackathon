import { formatAmount } from "../../services/Utils";
import PieChart from '../shared/PieChart';

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
      <PieChart data={pieChartData}/>
    </div>
  );
};

export default ExpenditurePieChart;