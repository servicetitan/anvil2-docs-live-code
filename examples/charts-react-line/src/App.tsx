import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: { type: "category", boundaryGap: false, data: months },
    yAxis: { type: "value" },
    series: [
      { type: "line", name: "Revenue", data: [820, 932, 901, 934, 1290, 1330] },
      { type: "line", name: "Costs", data: [620, 732, 701, 734, 1090, 1130] },
      { type: "line", name: "Profit", data: [200, 200, 200, 200, 200, 200] },
    ],
  };

  return (
    <Chart option={option} variant="categorical" width={480} height={300} />
  );
}

export default App;
