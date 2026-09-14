import { Flex, Grid, Divider, Button, Text, Icon } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";
import Build from "@servicetitan/anvil2/assets/icons/material/round/build.svg";
import CardMembership from "@servicetitan/anvil2/assets/icons/material/round/card_membership.svg";
import Pause from "@servicetitan/anvil2/assets/icons/material/round/pause.svg";
import Schedule from "@servicetitan/anvil2/assets/icons/material/round/schedule.svg";
import ArrowForward from "@servicetitan/anvil2/assets/icons/material/round/arrow_forward.svg";

function App() {
  return (
    <Flex justifyContent="center" style={{ padding: "2rem", width: "100%" }}>
      <Flex direction="column" gap={5} style={{ maxWidth: 850, width: "100%" }}>
        <Flex
          direction="column"
          alignItems="center"
          gap={1}
          style={{ textAlign: "center", width: "100%" }}
        >
          <Text variant="headline" el="h2" size="medium">
            Welcome to Reports
          </Text>
          <Text subdued>
            You don’t have any reports. Here are some suggestions to get started
            with your first one.
          </Text>
        </Flex>

        <Divider spacing="0" />

        <Grid
          templateColumns="1fr"
          gap={4}
          md={{ templateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          <Grid.Item>
            <InteractiveCard
              wrapperProps={{
                "aria-label": "Unsold Estimates card",
                style: { height: "100%" },
              }}
              actionProps={{
                "aria-label": "Unsold Estimates",
                onClick: () => console.log("Unsold Estimates"),
              }}
              contentProps={{
                padding: "medium",
                gap: 4,
                style: { width: "100%" },
              }}
            >
              <Icon svg={Build} size="small" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Unsold Estimates
                </Text>
                <Text subdued size="small">
                  Find and target open estimates. Leave no opportunity behind by
                  creating custom parameters with your audience.
                </Text>
              </Flex>
            </InteractiveCard>
          </Grid.Item>

          <Grid.Item>
            <InteractiveCard
              wrapperProps={{
                "aria-label": "Expiring Memberships card",
                style: { height: "100%" },
              }}
              actionProps={{
                "aria-label": "Expiring Memberships",
                onClick: () => console.log("Expiring Memberships"),
              }}
              contentProps={{
                padding: "medium",
                gap: 4,
                style: { width: "100%" },
              }}
            >
              <Icon svg={CardMembership} size="small" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Expiring Memberships
                </Text>
                <Text subdued size="small">
                  Automatically reach out to customers with soon to expire
                  memberships. Allow customers to see what memberships will
                  expire and when. Prompt them to take action and renew.
                </Text>
              </Flex>
            </InteractiveCard>
          </Grid.Item>

          <Grid.Item>
            <InteractiveCard
              wrapperProps={{
                "aria-label": "Idle Account card",
                style: { height: "100%" },
              }}
              actionProps={{
                "aria-label": "Idle Account",
                onClick: () => console.log("Idle Account"),
              }}
              contentProps={{
                padding: "medium",
                gap: 4,
                style: { width: "100%" },
              }}
            >
              <Icon svg={Pause} size="small" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Idle Account
                </Text>
                <Text subdued size="small">
                  Follow up with existing customers who have no recent activity
                  in ServiceTitan. Customize the date parameter to find
                  customers who have not called or booked a job.
                </Text>
              </Flex>
            </InteractiveCard>
          </Grid.Item>

          <Grid.Item>
            <InteractiveCard
              wrapperProps={{
                "aria-label": "Aging Equipment card",
                style: { height: "100%" },
              }}
              actionProps={{
                "aria-label": "Aging Equipment",
                onClick: () => console.log("Aging Equipment"),
              }}
              contentProps={{
                padding: "medium",
                gap: 4,
                style: { width: "100%" },
              }}
            >
              <Icon svg={Schedule} size="small" aria-hidden />
              <Flex direction="column" gap={1} style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Aging Equipment
                </Text>
                <Text subdued size="small">
                  Target customers with specific equipment. Let them know you’re
                  aware of their home and encourage them to take the next step
                  in protecting their home.
                </Text>
              </Flex>
            </InteractiveCard>
          </Grid.Item>
        </Grid>

        <Flex justifyContent="end">
          <Button
            appearance="secondary"
            icon={{ after: ArrowForward }}
            onClick={() => console.log("Or start from an empty project")}
          >
            Or start from an empty project
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
