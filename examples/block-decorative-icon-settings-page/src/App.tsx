import { Fragment } from "react";
import {
  Button,
  Card,
  Divider,
  Flex,
  Icon,
  Text,
  type Svg,
} from "@servicetitan/anvil2";
import AssignmentInd from "@servicetitan/anvil2/assets/icons/material/round/assignment_ind.svg";
import SyncAlt from "@servicetitan/anvil2/assets/icons/material/round/sync_alt.svg";
import Rule from "@servicetitan/anvil2/assets/icons/material/round/rule.svg";
import Cases from "@servicetitan/anvil2/assets/icons/material/round/cases.svg";
import ContactEmergency from "@servicetitan/anvil2/assets/icons/material/round/contact_emergency.svg";

type DecorativeIconSize = "small" | "medium" | "large" | "xlarge";

const decorativeIconCircleSize: Record<DecorativeIconSize, string> = {
  small: "var(--a2-size-6, 24px)",
  medium: "var(--a2-size-8, 32px)",
  large: "var(--a2-size-10, 40px)",
  xlarge: "var(--a2-size-12, 48px)",
};

function DecorativeIcon({
  svg,
  size = "medium",
}: {
  svg: Svg;
  size?: DecorativeIconSize;
}) {
  return (
    <Icon
      svg={svg}
      size={size}
      color="var(--a2-color-blue-700)"
      aria-hidden
      style={{
        alignItems: "center",
        background: "var(--a2-color-blue-100)",
        borderRadius: "50%",
        display: "inline-flex",
        flexShrink: 0,
        height: decorativeIconCircleSize[size],
        justifyContent: "center",
        width: decorativeIconCircleSize[size],
      }}
    />
  );
}

const settingsPageSections: {
  icon: Svg;
  title: string;
  description: string;
}[] = [
  {
    icon: AssignmentInd,
    title: "Persona",
    description:
      "Define your Voice Agent's brand identity and foundational knowledge to ensure a consistent and informed customer experience",
  },
  {
    icon: SyncAlt,
    title: "Conversation Flow",
    description:
      "Configure the interaction logic and specialized responses that guide your Voice Agent through various customer scenarios",
  },
  {
    icon: Rule,
    title: "Rules",
    description:
      "Define permissions for Voice Agent actions, such as booking jobs and processing payments",
  },
  {
    icon: Cases,
    title: "Job Types and Fees",
    description:
      "Manage job types, dispatch fees, and how fees are communicated to your customers",
  },
  {
    icon: ContactEmergency,
    title: "Escalations and Fallbacks",
    description:
      "Manage the transition from Voice Agent to human support to ensure every call reaches a resolution",
  },
];

function App() {
  return (
    <Card
      padding="0"
      flexDirection="column"
      style={{ width: "min(800px, 100%)", boxSizing: "border-box" }}
    >
      {settingsPageSections.map((section, index) => (
        <Fragment key={section.title}>
          {index > 0 && <Divider />}
          <div style={{ padding: 24 }}>
            <Flex
              justifyContent="space-between"
              alignItems="start"
              gap={4}
              md={{ alignItems: "center" }}
            >
              <Flex
                direction="column"
                alignItems="start"
                gap={4}
                style={{ flex: 1, minWidth: 0 }}
                md={{ direction: "row" }}
              >
                <DecorativeIcon svg={section.icon} size="large" />
                <Flex
                  direction="column"
                  gap={1}
                  style={{ flex: 1, minWidth: 0 }}
                >
                  <Text inline style={{ fontWeight: "bold" }}>
                    {section.title}
                  </Text>
                  <Text subdued>{section.description}</Text>
                </Flex>
              </Flex>
              <Button
                appearance="secondary"
                onClick={() => console.log(`Edit ${section.title}`)}
                style={{ flexShrink: 0 }}
              >
                Edit
              </Button>
            </Flex>
          </div>
        </Fragment>
      ))}
    </Card>
  );
}

export default App;
