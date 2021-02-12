import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { formatAmount } from "../../services/Utils";

const tickStyles = {
  fill: "#073b4c",
  fontSize: 18,
  fontWeight: 500,
  fontFamily: "Roboto",
};

const COLORS = ["#18D8A6", "#1185B2", "#FACE61", "#093B4C"];

interface PieChartItem {
  name: string;
  value: number;
}

interface ExpenditurePieChartProps {
  menuItemName: string;
  pieChartData: PieChartItem[];
  showTotal: boolean;
}

const renderCustomizedLabel = (pieChartData: PieChartItem[], props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, index } = props;
  const RADIAN = Math.PI / 180;
  // eslint-disable-next-line
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  // eslint-disable-next-line
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  // eslint-disable-next-line
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#8884d8"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={tickStyles}
    >
      <tspan style={tickStyles}>
        {formatAmount(pieChartData[index].value)}
      </tspan>
      <tspan x={x} y={y + tickStyles.fontSize + 5} style={tickStyles}>
        {pieChartData[index].name}
      </tspan>
    </text>
  );
};

const calculateTotal = (pieChartData: PieChartItem[]) => {
  return pieChartData.map((item) => item.value).reduce((a, b) => a + b, 0);
};

export const ExpenditurePieChart = (props: ExpenditurePieChartProps) => {
  const { pieChartData, menuItemName, showTotal } = props;
  const totalDisbursed = calculateTotal(pieChartData);

  return (
    <div>
      <div className="is-flex is-flex is-justify-content-space-between">
        {showTotal && (
          <div>
            <p className="visualization__title">
              Expending Body: {menuItemName}
            </p>
            <p className="visualization__sub-title">
              Source of funds: National Government
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
      <ResponsiveContainer id="expenditure-counties" width="100%" height={530}>
        <PieChart>
          <Pie
            cy="50%"
            data={pieChartData}
            labelLine={true}
            label={(labelProps) =>
              renderCustomizedLabel(pieChartData, labelProps)
            }
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
