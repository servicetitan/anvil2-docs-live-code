import {
  Chart,
  type ChartTooltipInfo,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";
import { CartoTheme, Text, TooltipSurface } from "@servicetitan/anvil2-ai-kit";
// This file is most likely already in your workspace
import "@servicetitan/anvil2-ai-kit/styles.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

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
    <CartoTheme>
      <Chart
        option={option}
        variant="categorical"
        renderTooltip={renderTooltip}
        width={480}
        height={300}
      />
    </CartoTheme>
  );
}

export default App;
