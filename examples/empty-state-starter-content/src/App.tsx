import {
  Text,
  Flex,
  Grid,
  Card,
  ButtonCompound,
  Icon,
} from "@servicetitan/anvil2";
import Build from "@servicetitan/anvil2/assets/icons/material/round/build.svg";
import Book from "@servicetitan/anvil2/assets/icons/material/round/book.svg";
import Pause from "@servicetitan/anvil2/assets/icons/material/round/pause.svg";
import Alarm from "@servicetitan/anvil2/assets/icons/material/round/alarm.svg";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap={6}
    >
      <Flex alignItems="center" direction="column">
        <Text variant="headline" el="h2">
          Welcome to Reports
        </Text>
        <Text style={{ textAlign: "center", maxWidth: "420px" }}>
          You don&apos;t have any reports. Here are some suggestions to get
          started with your first one.
        </Text>
      </Flex>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        style={{ maxWidth: "600px" }}
      >
        <Grid.Item>
          <ButtonCompound shape="rounded" style={{ height: "100%" }}>
            <Card gap={4} style={{ height: "100%" }}>
              <Icon
                svg={Build}
                color={core.semantic.ForegroundColorSubdued.value}
                style={{ paddingTop: core.primitive.Size1.value }}
              />
              <Flex direction="column" gap={1}>
                <Text variant="headline" el="h3" size="small">
                  Unsold Estimates
                </Text>
                <Text subdued size="small">
                  Find and target open estimates. Leave no opportunity behind by
                  creating custom parameters with your audience.
                </Text>
              </Flex>
            </Card>
          </ButtonCompound>
        </Grid.Item>
        <Grid.Item>
          <ButtonCompound shape="rounded" style={{ height: "100%" }}>
            <Card gap={4} style={{ height: "100%" }}>
              <Icon
                svg={Book}
                color={core.semantic.ForegroundColorSubdued.value}
                style={{ paddingTop: core.primitive.Size1.value }}
              />
              <Flex direction="column" gap={1}>
                <Text variant="headline" el="h3" size="small">
                  Expiring Memberships
                </Text>
                <Text subdued size="small">
                  Automatically reach out to customers with soon to expire
                  memberships. Allow customers to see what memberships will
                  expire and when. Prompt them to take action and renew.
                </Text>
              </Flex>
            </Card>
          </ButtonCompound>
        </Grid.Item>
        <Grid.Item>
          <ButtonCompound shape="rounded" style={{ height: "100%" }}>
            <Card gap={4} style={{ height: "100%" }}>
              <Icon
                svg={Pause}
                color={core.semantic.ForegroundColorSubdued.value}
                style={{ paddingTop: core.primitive.Size1.value }}
              />
              <Flex direction="column" gap={1}>
                <Text variant="headline" el="h3" size="small">
                  Idle Account
                </Text>
                <Text subdued size="small">
                  Follow up with existing customers who have no recent activity
                  in ServiceTitan. Customize the date parameter to find
                  customers who have not called or booked a job.
                </Text>
              </Flex>
            </Card>
          </ButtonCompound>
        </Grid.Item>
        <Grid.Item>
          <ButtonCompound shape="rounded" style={{ height: "100%" }}>
            <Card gap={4} style={{ height: "100%" }}>
              <Icon
                svg={Alarm}
                color={core.semantic.ForegroundColorSubdued.value}
                style={{ paddingTop: core.primitive.Size1.value }}
              />
              <Flex direction="column" gap={1}>
                <Text variant="headline" el="h3" size="small">
                  Aging Equipment
                </Text>
                <Text subdued size="small">
                  Target customers with specific equipment. Let them know
                  you&apos;re aware of their home and encourage them to take the
                  next step in protecting their home.
                </Text>
              </Flex>
            </Card>
          </ButtonCompound>
        </Grid.Item>
      </Grid>
    </Flex>
  );
}

export default App;
