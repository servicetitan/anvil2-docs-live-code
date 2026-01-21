import { Grid, Tooltip, Text } from "@servicetitan/anvil2";

function App() {
  const table = {
    high: {
      color: {
        blue: {
          "500": {
            value: "#0265dcff",
          },
          "600": {
            value: "#004491ff",
          },
        },
        red: {
          "500": {
            value: "#e13212ff",
          },
          "600": {
            value: "#bf2a00ff",
          },
        },
        yellow: {
          "500": {
            value: "#ffbe00ff",
          },
          "600": {
            value: "#de9500ff",
          },
        },
        green: {
          "500": {
            value: "#007a4dff",
          },
          "600": {
            value: "#005132ff",
          },
        },
        "blue-grey": {
          "500": {
            value: "#6a7a85ff",
          },
          "600": {
            value: "#576671ff",
          },
        },
        orange: {
          "500": {
            value: "#b14c00ff",
          },
          "600": {
            value: "#7a2f00ff",
          },
        },
        cyan: {
          "500": {
            value: "#0ca5c0ff",
          },
          "600": {
            value: "#038299ff",
          },
        },
        purple: {
          "500": {
            value: "#4f3a9eff",
          },
          "600": {
            value: "#422799ff",
          },
        },
        magenta: {
          "500": {
            value: "#982071ff",
          },
          "600": {
            value: "#7d165bff",
          },
        },
      },
    },
    medium: {
      color: {
        blue: {
          "200": { value: "#b5deffff" },
          "300": { value: "#78bbfaff" },
          "400": { value: "#3892f3ff" },
        },
        red: {
          "200": { value: "#ffb2a0ff" },
          "300": { value: "#ff745fff" },
          "400": { value: "#f94d32ff" },
        },
        yellow: {
          "200": { value: "#fff0b1ff" },
          "300": { value: "#ffe278ff" },
          "400": { value: "#ffc902ff" },
        },
        green: {
          "200": { value: "#89ecbcff" },
          "300": { value: "#49cc93ff" },
          "400": { value: "#15a46eff" },
        },
        "blue-grey": {
          "200": { value: "#d0d8ddff" },
          "300": { value: "#b4c1c8ff" },
          "400": { value: "#8c9ca5ff" },
        },
        orange: {
          "200": { value: "#fdd291ff" },
          "300": { value: "#ffa037ff" },
          "400": { value: "#e46f00ff" },
        },
        cyan: {
          "200": { value: "#b1f3faff" },
          "300": { value: "#13ceeaff" },
          "400": { value: "#08bfdfff" },
        },
        purple: {
          "200": { value: "#c1b6f2ff" },
          "300": { value: "#8772e5ff" },
          "400": { value: "#6954c0ff" },
        },
        magenta: {
          "200": { value: "#faafe2ff" },
          "300": { value: "#d949a9ff" },
          "400": { value: "#b52d88ff" },
        },
      },
    },
    low: {
      color: {
        blue: {
          "100": {
            value: "#e0f2ffff",
          },
        },
        red: {
          "100": {
            value: "#ffece9ff",
          },
        },
        yellow: {
          "100": {
            value: "#fff9e2ff",
          },
        },
        green: {
          "100": {
            value: "#cef8e0ff",
          },
        },
        "blue-grey": {
          "100": {
            value: "#eaeff2ff",
          },
        },
        orange: {
          "100": {
            value: "#ffecccff",
          },
        },
        cyan: {
          "100": {
            value: "#e3fcffff",
          },
        },
        purple: {
          "100": {
            value: "#f1edffff",
          },
        },
        magenta: {
          "100": {
            value: "#fbeaf5ff",
          },
        },
      },
    },
  };

  const ColorBox = ({
    color,
    shade,
    value,
  }: {
    color: string;
    shade: string;
    value: string;
  }) => (
    <Tooltip>
      <Tooltip.Trigger>
        <div
          key={`${color}-${shade}`}
          style={{
            backgroundColor: value,
            borderRadius: "6px",
            width: "60px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        />
      </Tooltip.Trigger>
      <Tooltip.Content>
        color/{color}/{shade}
      </Tooltip.Content>
    </Tooltip>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        placeItems: "center",
        padding: "1rem",
        margin: "auto",
        minWidth: "600px",
        overflowX: "scroll",
      }}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap="14">
        <div
          style={{
            backgroundColor: "var(--background-color-stronger)",
            color: "var(--foreground-color)",
            borderRadius: "12px",
            display: "grid",
            gridTemplateColumns: "subgrid",
            gridColumn: "1 / 4",
            padding: "16px 16px 8px 16px",
          }}
        >
          <Text variant="headline" size="small" el="h5">
            Emphasis
          </Text>
          <Text variant="headline" size="small" el="h5">
            Color Ramp
          </Text>
          <Text variant="headline" size="small" el="h5">
            Examples
          </Text>
        </div>
        <div style={{ paddingLeft: "16px" }}>High</div>
        <div>Colors 500—600</div>
        <Grid templateColumns="repeat(4, 1fr)" gap="4">
          {Object.entries(table.high.color).map(([color, shades]) =>
            Object.entries(shades).map(([shade, { value }]) => (
              <ColorBox
                key={`${color}-${shade}`}
                color={color}
                shade={shade}
                value={value}
              />
            )),
          )}
        </Grid>
        <div style={{ paddingLeft: "16px" }}>Medium</div>
        <div>Colors 200—400</div>
        <Grid templateColumns="repeat(4, 1fr)" gap="4">
          {Object.entries(table.medium.color).map(([color, shades]) =>
            Object.entries(shades).map(([shade, { value }]) => (
              <ColorBox
                key={`${color}-${shade}`}
                color={color}
                shade={shade}
                value={value}
              />
            )),
          )}
        </Grid>
        <div style={{ paddingLeft: "16px" }}>Low</div>
        <div>Colors 100</div>
        <Grid templateColumns="repeat(4, 1fr)" gap="4">
          {Object.entries(table.low.color).map(([color, shades]) =>
            Object.entries(shades).map(([shade, { value }]) => (
              <ColorBox
                key={`${color}-${shade}`}
                color={color}
                shade={shade}
                value={value}
              />
            )),
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
