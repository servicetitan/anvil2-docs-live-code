import {
  Chart,
  chartPalette,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const appearance = "light" as const;
  const colors = chartPalette(appearance, "categorical");

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
        name: "A",
        data: [820, 932, 901, 934, 1290, 1330],
        itemStyle: { color: colors[2] },
      },
      {
        type: "line",
        name: "B",
        data: [620, 732, 701, 734, 1090, 1130],
        itemStyle: { color: colors[0] },
      },
    ],
  };

  return (
    <Chart
      option={option}
      appearance={appearance}
      variant="categorical"
      width={480}
      height={300}
    />
  );
}

export default App;
