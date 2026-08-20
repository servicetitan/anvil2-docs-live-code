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
        name: "Target",
        data: [900, 950, 1000, 1050, 1100, 1200],
        itemStyle: { color: "#ffffff" },
        lineStyle: { type: "dotted", color: "#ffffff" },
      },
    ],
  };

  return (
    <Chart option={option} variant="categorical" width={480} height={320} />
  );
}

export default App;
