import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    legend: { orient: "vertical", right: 8, top: "middle" },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { name: "Organic", value: 48 },
          { name: "Paid", value: 32 },
          { name: "Referral", value: 14 },
          { name: "Other", value: 6 },
        ],
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%",
        },
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={300} />
  );
}

export default App;
