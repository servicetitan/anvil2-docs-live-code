import { Grid, Tooltip, Text } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  const { primitive } = core;
  const table = {
    high: {
      color: {
        blue: { "500": primitive.ColorBlue500, "600": primitive.ColorBlue600 },
        red: { "500": primitive.ColorRed500, "600": primitive.ColorRed600 },
        yellow: {
          "500": primitive.ColorYellow500,
          "600": primitive.ColorYellow600,
        },
        green: {
          "500": primitive.ColorGreen500,
          "600": primitive.ColorGreen600,
        },
        "blue-grey": {
          "500": primitive.ColorBlueGrey500,
          "600": primitive.ColorBlueGrey600,
        },
        orange: {
          "500": primitive.ColorOrange500,
          "600": primitive.ColorOrange600,
        },
        cyan: { "500": primitive.ColorCyan500, "600": primitive.ColorCyan600 },
        purple: {
          "500": primitive.ColorPurple500,
          "600": primitive.ColorPurple600,
        },
        magenta: {
          "500": primitive.ColorMagenta500,
          "600": primitive.ColorMagenta600,
        },
      },
    },
    medium: {
      color: {
        blue: {
          "200": primitive.ColorBlue200,
          "300": primitive.ColorBlue300,
          "400": primitive.ColorBlue400,
        },
        red: {
          "200": primitive.ColorRed200,
          "300": primitive.ColorRed300,
          "400": primitive.ColorRed400,
        },
        yellow: {
          "200": primitive.ColorYellow200,
          "300": primitive.ColorYellow300,
          "400": primitive.ColorYellow400,
        },
        green: {
          "200": primitive.ColorGreen200,
          "300": primitive.ColorGreen300,
          "400": primitive.ColorGreen400,
        },
        "blue-grey": {
          "200": primitive.ColorBlueGrey200,
          "300": primitive.ColorBlueGrey300,
          "400": primitive.ColorBlueGrey400,
        },
        orange: {
          "200": primitive.ColorOrange200,
          "300": primitive.ColorOrange300,
          "400": primitive.ColorOrange400,
        },
        cyan: {
          "200": primitive.ColorCyan200,
          "300": primitive.ColorCyan300,
          "400": primitive.ColorCyan400,
        },
        purple: {
          "200": primitive.ColorPurple200,
          "300": primitive.ColorPurple300,
          "400": primitive.ColorPurple400,
        },
        magenta: {
          "200": primitive.ColorMagenta200,
          "300": primitive.ColorMagenta300,
          "400": primitive.ColorMagenta400,
        },
      },
    },
    low: {
      color: {
        blue: { "100": primitive.ColorBlue100 },
        red: { "100": primitive.ColorRed100 },
        yellow: { "100": primitive.ColorYellow100 },
        green: { "100": primitive.ColorGreen100 },
        "blue-grey": { "100": primitive.ColorBlueGrey100 },
        orange: { "100": primitive.ColorOrange100 },
        cyan: { "100": primitive.ColorCyan100 },
        purple: { "100": primitive.ColorPurple100 },
        magenta: { "100": primitive.ColorMagenta100 },
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
