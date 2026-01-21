import { Grid, Flex, Text } from "@servicetitan/anvil2";

function App() {
  const passGuidelines = {
    1: {
      description: "Foreground on background",
      foreground: "--foreground-color",
      background: "--background-color",
    },
    2: {
      description: "Foreground/subdued on background",
      foreground: "--foreground-color-subdued",
      background: "--background-color",
    },
    3: {
      description: "Foreground on background/primary",
      foreground: "--foreground-color-inverted",
      background: "--status-color-info",
    },
  };

  return (
    <Grid gap="2" templateColumns="repeat(auto-fit, minmax(186px, 1fr))">
      {Object.entries(passGuidelines).map(([key, color]) => (
        <Flex key={key} gap="3" direction="column">
          <div
            style={{
              backgroundColor: `var(${color.background})`,
              borderColor: "var(--border-color)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "12px",
              padding: "24px",
              width: "100px",
            }}
          >
            <Flex gap="3" direction="column">
              <div
                style={{
                  backgroundColor: `var(${color.foreground})`,
                  height: "12px",
                  width: "62%",
                  borderRadius: "3px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: `var(${color.foreground})`,
                  height: "12px",
                  width: "100%",
                  borderRadius: "3px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: `var(${color.foreground})`,
                  height: "12px",
                  width: "100%",
                  borderRadius: "3px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: `var(${color.foreground})`,
                  height: "12px",
                  width: "100%",
                  borderRadius: "3px",
                }}
              ></div>
            </Flex>
          </div>
          <Text variant="eyebrow">{color.description}</Text>
        </Flex>
      ))}
    </Grid>
  );
}

export default App;
