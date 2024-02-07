import "./BarChart.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: props) => {
  return (
    <div className="barCharBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart  data={props.chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "15px",
              }}
              labelStyle={{
                display: "none",
              }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
