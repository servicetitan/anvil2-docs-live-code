import {
  Chart,
  type ChartTooltipInfo,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";
import { CartoTheme, Text, TooltipSurface } from "@servicetitan/anvil2-ai-kit";
// This file is most likely already in your workspace
import "@servicetitan/anvil2-ai-kit/styles.css";

function renderTooltip({ name, points }: ChartTooltipInfo) {
  return (
    <TooltipSurface
      content={
        <>
          <Text text={name} />
          {points.map((point) => (
            <Text
              key={point.seriesIndex}
              text={`${point.seriesName ? `${point.seriesName}: ` : ""}${String(point.value)}`}
            />
          ))}
        </>
      }
    />
  );
}

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
      },
    ],
  };

  return (
    <CartoTheme>
      <Chart
        option={option}
        variant="monochrome"
        renderTooltip={renderTooltip}
        width={480}
        height={300}
      />
    </CartoTheme>
  );
}

export default App;
