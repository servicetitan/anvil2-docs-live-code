import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        name: "Leads",
        stack: "total",
        data: [320, 332, 301, 334, 390, 330],
      },
      {
        type: "bar",
        name: "Booked",
        stack: "total",
        data: [220, 182, 191, 234, 290, 330],
      },
      {
        type: "bar",
        name: "Customers",
        stack: "total",
        data: [150, 232, 201, 154, 190, 330],
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={320} />
  );
}

export default App;
