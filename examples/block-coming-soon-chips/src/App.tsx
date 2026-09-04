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
        columnGap={12}
        rowGap={1}
        alignItems="start"
        style={{ width: "100%" }}
      >
        <Grid.Item>
          <DecorativeIcon svg={WatchLater} />
        </Grid.Item>
        <Grid.Item>
          <DecorativeIcon svg={PeopleAlt} />
        </Grid.Item>
        <Grid.Item>
          <DecorativeIcon svg={CallMissed} />
        </Grid.Item>
        <Grid.Item>
          <DecorativeIcon svg={EventAvailable} />
        </Grid.Item>

        <Grid.Item>
          <Text variant="eyebrow" size="small">
            Avg wait time
          </Text>
        </Grid.Item>
        <Grid.Item>
          <Text variant="eyebrow" size="small">
            Avg talk time
          </Text>
        </Grid.Item>
        <Grid.Item>
          <Text variant="eyebrow" size="small">
            Abandon rate
          </Text>
        </Grid.Item>
        <Grid.Item>
          <Text variant="eyebrow" size="small">
            Booking rate
          </Text>
        </Grid.Item>

        <Grid.Item style={{ display: "flex", alignItems: "center" }}>
          <Text variant="headline" el="h4" size="large">
            5:50
          </Text>
        </Grid.Item>
        <Grid.Item style={{ display: "flex", alignItems: "center" }}>
          <Chip label="Coming soon" size="medium" style={{ marginTop: 2 }} />
        </Grid.Item>
        <Grid.Item style={{ display: "flex", alignItems: "center" }}>
          <Text variant="headline" el="h4" size="large">
            6.5%
          </Text>
        </Grid.Item>
        <Grid.Item style={{ display: "flex", alignItems: "center" }}>
          <Chip label="Coming soon" size="medium" style={{ marginTop: 2 }} />
        </Grid.Item>
      </Grid>
    </Card>
  );
}

export default App;
