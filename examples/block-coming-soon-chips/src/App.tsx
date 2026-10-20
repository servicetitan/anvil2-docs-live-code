import { Card, Chip, Grid, Icon, type Svg, Text } from "@servicetitan/anvil2";
import CallMissed from "@servicetitan/anvil2/assets/icons/material/round/call_missed.svg";
import EventAvailable from "@servicetitan/anvil2/assets/icons/material/round/event_available.svg";
import PeopleAlt from "@servicetitan/anvil2/assets/icons/material/round/people_alt.svg";
import WatchLater from "@servicetitan/anvil2/assets/icons/material/round/watch_later.svg";

function DecorativeIcon({ svg }: { svg: Svg }) {
  return (
    <Icon
      svg={svg}
      size="medium"
      color="var(--a2-color-blue-700)"
      aria-hidden
      style={{
        alignItems: "center",
        background: "var(--a2-color-blue-100)",
        borderRadius: "50%",
        display: "inline-flex",
        flexShrink: 0,
        height: "var(--a2-size-8, 32px)",
        justifyContent: "center",
        width: "var(--a2-size-8, 32px)",
      }}
    />
  );
}

const metricColumn = {
  display: "grid",
  gridRow: "span 3",
  gridTemplateRows: "subgrid",
};

function App() {
  return (
    <Card
      padding="medium"
      flexDirection="column"
      gap={4}
      style={{ maxWidth: 640, width: "100%", boxSizing: "border-box" }}
    >
      <Text variant="headline" el="h3" size="small">
        Today’s performance
      </Text>

      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="auto auto auto"
        columnGap={12}
        rowGap={1}
        alignItems="start"
        style={{ width: "100%" }}
      >
        <Grid.Item style={metricColumn}>
          <DecorativeIcon svg={WatchLater} />
          <Text variant="eyebrow" size="small">
            Avg wait time
          </Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text size="xlarge" style={{ fontWeight: "bold" }}>
              5:50
            </Text>
          </div>
        </Grid.Item>
        <Grid.Item style={metricColumn}>
          <DecorativeIcon svg={PeopleAlt} />
          <Text variant="eyebrow" size="small">
            Avg talk time
          </Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Chip label="Coming soon" size="medium" style={{ marginTop: 2 }} />
          </div>
        </Grid.Item>
        <Grid.Item style={metricColumn}>
          <DecorativeIcon svg={CallMissed} />
          <Text variant="eyebrow" size="small">
            Abandon rate
          </Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text size="xlarge" style={{ fontWeight: "bold" }}>
              6.5%
            </Text>
          </div>
        </Grid.Item>
        <Grid.Item style={metricColumn}>
          <DecorativeIcon svg={EventAvailable} />
          <Text variant="eyebrow" size="small">
            Booking rate
          </Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Chip label="Coming soon" size="medium" style={{ marginTop: 2 }} />
          </div>
        </Grid.Item>
      </Grid>
    </Card>
  );
}

export default App;
