import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import { ThemeMonochrome } from "@servicetitan/anvil2-ext-charts/am5";

function App() {
  useLayoutEffect(() => {
    const data = [
      { category: "Lithuania", value: 501.9 },
      { category: "Czechia", value: 301.9 },
      { category: "Ireland", value: 201.1 },
      { category: "Germany", value: 165.8 },
    ];

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root), ThemeMonochrome.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
        innerRadius: am5.percent(50),
      }),
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "value",
        categoryField: "category",
        legendValueText: "",
      }),
    );

    // Display percentage labels on slices
    series.labels.template.set(
      "text",
      "{valuePercentTotal.formatNumber('#.')}%",
    );

    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div id="chartdiv" style={{ minWidth: "55rem", height: "500px" }} />;
}

export default App;
