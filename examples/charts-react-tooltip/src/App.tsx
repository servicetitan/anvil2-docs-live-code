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
    grid: { left: 48, right: 16, top: 24, bottom: 32 },
    xAxis: { type: "category", data: ["North", "South", "East", "West"] },
    yAxis: { type: "value" },
    series: [{ type: "bar", data: [1200, 980, 1450, 1100] }],
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
