import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "line",
        name: "Revenue",
        stack: "total",
        data: [320, 332, 301, 334, 390, 330],
        areaStyle: {},
      },
      {
        type: "line",
        name: "Costs",
        stack: "total",
        data: [220, 182, 191, 234, 290, 330],
        areaStyle: {},
      },
      {
        type: "line",
        name: "Profit",
        stack: "total",
        data: [150, 232, 201, 154, 190, 330],
        areaStyle: {},
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={300} />
  );
}

export default App;
