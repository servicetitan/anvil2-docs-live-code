import { Fragment, useMemo, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  Drawer,
  Flex,
  Icon,
  Text,
} from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";
import ArrowForward from "@servicetitan/anvil2/assets/icons/material/round/arrow_forward.svg";
import SwapVert from "@servicetitan/anvil2/assets/icons/material/round/swap_vert.svg";

interface Deployment {
  id: string;
  org: string;
  app: string;
  statusColor: string;
  statusLabel: string;
  deployedFrom: string;
  initiatedAgo: string;
  envLabel: string;
}

const deployments: Deployment[] = [
  {
    id: "planetaria-ios-preview",
    org: "Planetaria",
    app: "ios-app",
    statusColor: "var(--a2-color-neutral-200, #c4c4c4)",
    statusLabel: "Building",
    deployedFrom: "Github",
    initiatedAgo: "1m 32s ago",
    envLabel: "Preview",
  },
  {
    id: "planetaria-ios-production",
    org: "Planetaria",
    app: "ios-app",
    statusColor: "var(--a2-color-neutral-200, #c4c4c4)",
    statusLabel: "Building",
    deployedFrom: "Github",
    initiatedAgo: "1m 32s ago",
    envLabel: "Production",
  },
  {
    id: "cosmos-explorer-android",
    org: "Cosmos Explorer",
    app: "android-app",
    statusColor: "var(--a2-color-green-500, #0aa86c)",
    statusLabel: "Build passed",
    deployedFrom: "Bitbucket",
    initiatedAgo: "2m 10s ago",
    envLabel: "Preview",
  },
  {
    id: "stellar-network-web",
    org: "Stellar Network",
    app: "web-app",
    statusColor: "var(--a2-color-neutral-200, #c4c4c4)",
    statusLabel: "Building",
    deployedFrom: "Gitlab",
    initiatedAgo: "3m 5s ago",
    envLabel: "Preview",
  },
  {
    id: "galactic-hub-desktop",
    org: "Galactic Hub",
    app: "desktop-app",
    statusColor: "var(--a2-color-green-500, #0aa86c)",
    statusLabel: "Build passed",
    deployedFrom: "SourceForge",
    initiatedAgo: "4m 15s ago",
    envLabel: "Production",
  },
  {
    id: "orbit-tracker-ios-1",
    org: "Orbit Tracker",
    app: "ios-app",
    statusColor: "var(--a2-color-green-500, #0aa86c)",
    statusLabel: "Build passed",
    deployedFrom: "Github",
    initiatedAgo: "5m 20s ago",
    envLabel: "Preview",
  },
  {
    id: "astral-navigator-android",
    org: "Astral Navigator",
    app: "android-app",
    statusColor: "var(--a2-color-red-500, #ff3914)",
    statusLabel: "Build failed",
    deployedFrom: "Bitbucket",
    initiatedAgo: "6m 45s ago",
    envLabel: "Preview",
  },
  {
    id: "orbit-tracker-ios-2",
    org: "Orbit Tracker",
    app: "ios-app",
    statusColor: "var(--a2-color-green-500, #0aa86c)",
    statusLabel: "Build passed",
    deployedFrom: "Github",
    initiatedAgo: "5m 20s ago",
    envLabel: "Preview",
  },
];

interface ActivityItem {
  id: string;
  person: string;
  timeAgo: string;
  description: string;
}

const activityItems: ActivityItem[] = [
  {
    id: "activity-1",
    person: "Michael Foster",
    timeAgo: "1h",
    description: "Pushed to ios-app (8c9d0e1 on main)",
  },
  {
    id: "activity-2",
    person: "Michael Foster",
    timeAgo: "1h",
    description: "Pushed to ios-app (8c36f0e1 on main)",
  },
  {
    id: "activity-3",
    person: "Emily Chen",
    timeAgo: "2h",
    description: "Merged pull request #42 into develop branch",
  },
  {
    id: "activity-4",
    person: "David Lee",
    timeAgo: "3h",
    description: "Fix bug in user auth (5436f0e1 on prod)",
  },
  {
    id: "activity-5",
    person: "Sarah Patel",
    timeAgo: "4h",
    description: "API endpoints (e136f0e1 on main)",
  },
  {
    id: "activity-6",
    person: "John Smith",
    timeAgo: "5h",
    description: "Feature for profile settings (rc36f0e1 on main)",
  },
  {
    id: "activity-7",
    person: "Emily Chen",
    timeAgo: "2h",
    description: "Merged pull request #42 into develop branch",
  },
];

function App() {
  const [sortAscending, setSortAscending] = useState(true);
  const [isActivityDrawerOpen, setIsActivityDrawerOpen] = useState(false);

  const sortedDeployments = useMemo(() => {
    const sorted = [...deployments].sort((a, b) => a.org.localeCompare(b.org));
    return sortAscending ? sorted : sorted.reverse();
  }, [sortAscending]);

  return (
    <>
      <style>{`[data-home-screens-row] > button { border-color: transparent; }`}</style>
      <Flex
        gap={12}
        alignItems="start"
        style={{ padding: "2rem", width: "100%" }}
      >
        {/* Deployments */}
        <Flex direction="column" gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Text variant="headline" el="h2">
              Deployments
            </Text>
            <Button
              appearance="secondary"
              icon={{ after: SwapVert }}
              onClick={() => setSortAscending((current) => !current)}
            >
              {sortAscending ? "Sort: A → Z" : "Sort: Z → A"}
            </Button>
          </Flex>

          <Flex direction="column" style={{ width: "100%" }}>
            {sortedDeployments.map((deployment, index) => (
              <Fragment key={deployment.id}>
                {index > 0 && <Divider />}
                <InteractiveCard
                  wrapperProps={{
                    "aria-label": `Open ${deployment.org} ${deployment.app} deployment`,
                    "data-home-screens-row": "",
                    style: { width: "100%" },
                  }}
                  actionProps={{
                    "aria-label": `Open ${deployment.org} ${deployment.app} deployment`,
                    onClick: () => {},
                  }}
                  contentProps={{
                    padding: "0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 4,
                    style: {
                      border: "none",
                      boxShadow: "none",
                      padding: "12px 0",
                      width: "100%",
                    },
                  }}
                >
                  <Flex direction="column" gap={2} style={{ minWidth: 0 }}>
                    <Flex alignItems="center" gap={3}>
                      <span
                        aria-hidden
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: deployment.statusColor,
                          boxShadow:
                            "var(--a2-shadow-size-float) var(--a2-shadow-color-default)",
                          flexShrink: 0,
                        }}
                      />
                      <Flex alignItems="center" gap={1}>
                        <Text>{deployment.org}</Text>
                        <Text subdued>/</Text>
                        <Text>{deployment.app}</Text>
                      </Flex>
                      <Chip label={deployment.statusLabel} size="small" />
                    </Flex>
                    <Text subdued>
                      Deploys from {deployment.deployedFrom} · Initiated{" "}
                      {deployment.initiatedAgo}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap={2} style={{ flexShrink: 0 }}>
                    <Chip label={deployment.envLabel} />
                    <Icon svg={ArrowForward} aria-hidden />
                  </Flex>
                </InteractiveCard>
              </Fragment>
            ))}
          </Flex>
        </Flex>

        {/* Activity feed */}
        <Card
          flexDirection="column"
          padding="0"
          gap={0}
          background="strong"
          style={{ width: 377, flexShrink: 0, alignSelf: "flex-start" }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: "12px 24px", width: "100%" }}
          >
            <Text variant="headline" el="h2">
              Activity feed
            </Text>
            <Button
              appearance="secondary"
              onClick={() => setIsActivityDrawerOpen(true)}
            >
              View all
            </Button>
          </Flex>

          {activityItems.map((item, index) => (
            <Fragment key={item.id}>
              {index > 0 && <Divider />}
              <InteractiveCard
                wrapperProps={{
                  "aria-label": `View activity from ${item.person}`,
                  "data-home-screens-row": "",
                  style: { width: "100%" },
                }}
                actionProps={{
                  "aria-label": `View activity from ${item.person}`,
                  onClick: () => {},
                }}
                contentProps={{
                  padding: "0",
                  flexDirection: "column",
                  gap: 2,
                  style: {
                    border: "none",
                    boxShadow: "none",
                    padding: "16px 24px",
                    width: "100%",
                  },
                }}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
                    <Avatar name={item.person} size="medium" />
                    <Text inline style={{ fontWeight: "bold" }}>
                      {item.person}
                    </Text>
                  </Flex>
                  <Text subdued inline>
                    {item.timeAgo}
                  </Text>
                </Flex>
                <Text subdued>{item.description}</Text>
              </InteractiveCard>
            </Fragment>
          ))}
        </Card>
      </Flex>

      <Drawer
        open={isActivityDrawerOpen}
        onClose={() => setIsActivityDrawerOpen(false)}
      >
        <Drawer.Header>Activity feed</Drawer.Header>
        <Drawer.Content>
          <Flex direction="column" style={{ width: "100%" }}>
            {activityItems.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 && <Divider />}
                <Flex
                  direction="column"
                  gap={2}
                  style={{ padding: "16px 0", width: "100%" }}
                >
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ width: "100%" }}
                  >
                    <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
                      <Avatar name={item.person} size="medium" />
                      <Text inline style={{ fontWeight: "bold" }}>
                        {item.person}
                      </Text>
                    </Flex>
                    <Text subdued inline>
                      {item.timeAgo}
                    </Text>
                  </Flex>
                  <Text subdued>{item.description}</Text>
                </Flex>
              </Fragment>
            ))}
          </Flex>
        </Drawer.Content>
        <Drawer.Footer sticky>
          <Drawer.CancelButton onClick={() => setIsActivityDrawerOpen(false)}>
            Close
          </Drawer.CancelButton>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

export default App;
