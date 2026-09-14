import { Flex, Icon, Text, type Svg } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";
import FormatListBulleted from "@servicetitan/anvil2/assets/icons/material/round/format_list_bulleted.svg";
import CalendarMonth from "@servicetitan/anvil2/assets/icons/material/round/calendar_month.svg";

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

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.";

const inCardsExamples: { icon: Svg; title: string; description: string }[] = [
  { icon: FormatListBulleted, title: "Create a list", description: LOREM },
  { icon: CalendarMonth, title: "Create a calendar", description: LOREM },
];

function App() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={4}
      style={{ width: "100%" }}
      md={{
        direction: "row",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      {inCardsExamples.map(({ icon, title, description }) => (
        <InteractiveCard
          key={title}
          wrapperProps={{
            "aria-label": `${title} card`,
            style: { width: "100%", maxWidth: 320 },
          }}
          actionProps={{
            "aria-label": title,
            onClick: () => console.log(title),
          }}
          contentProps={{
            padding: "medium",
            flexDirection: "column",
            gap: 4,
            style: { width: "100%" },
          }}
        >
          <DecorativeIcon svg={icon} size="large" />
          <Flex direction="column" gap={1}>
            <Text variant="headline" el="h3" size="small">
              {title}
            </Text>
            <Text variant="body" size="small" subdued>
              {description}
            </Text>
          </Flex>
        </InteractiveCard>
      ))}
    </Flex>
  );
}

export default App;
