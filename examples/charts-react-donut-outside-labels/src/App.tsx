import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    series: [
      {
        type: "pie",
        radius: ["35%", "55%"],
        data: [
          { name: "Organic", value: 48 },
          { name: "Paid", value: 32 },
          { name: "Referral", value: 14 },
          { name: "Other", value: 6 },
        ],
        label: {
          show: true,
          position: "outside",
          formatter: "{b}\n{d}%",
        },
        labelLine: { show: true },
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={300} />
  );
}

export default App;
