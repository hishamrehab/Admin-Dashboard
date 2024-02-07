import TopBox from "../../components/topBox/TopBox";
import "./HomePage.scss";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChart/PieChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
  pieChartBox,
} from "../../data";
import BarChartBox from "../../components/BarChart/BarChart";
const HomePage = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>

      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>

      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>

      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">Box4 </div>

      <div className="box box7">
        <BarChartBox {...barChartBoxRevenue} />
      </div>

      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <PieChartBox {...pieChartBox} />
      </div>
    </div>
  );
};

export default HomePage;
